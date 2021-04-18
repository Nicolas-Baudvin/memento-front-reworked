import { mount } from "enzyme";
import { useSelector as useSelectorMock } from "react-redux";
import { useState as useStateMock } from "react";
import Dashboard from ".";
import { deleteBoard, getBoards } from "../../Store/Tabs/actions";
import { Board } from "../../Store/Tabs/types";
import Modale from "../Modale";

const mockBoardData: Board = {
  title: "title",
  ownerID: "ownerID",
  owner: { username: "owner" },
  image: { url: "url", alt: "alt" },
  _id: "_id",
};
const mockDispatch = jest.fn();
const setState = jest.fn();
const mockHistoryPush = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

describe("<Dashboard />", () => {
  beforeEach(() => {
    (useSelectorMock as jest.Mock).mockImplementation(() => ({
      token: "string",
      all: [mockBoardData],
      current: mockBoardData,
    }));
    (useStateMock as jest.Mock).mockImplementation((init) => [false, setState]);
  });

  it("should render nicely", () => {
    const wrapper = mount(<Dashboard />);
    expect(wrapper).toBeTruthy();
  });

  it("should dispatch getBoards() on rendering", () => {
    const wrapper = mount(<Dashboard />);
    expect(mockDispatch).toHaveBeenCalledWith(getBoards());
  });

  it("should call setState 3 times when opening modale", () => {
    const wrapper = mount(<Dashboard />);
    const deleteButton = wrapper.find(".delete");
    deleteButton.simulate("click", mockBoardData);
    expect(setState).toHaveBeenCalledTimes(2);
    expect(setState).toHaveBeenCalledWith(mockBoardData);
    expect(setState).toHaveBeenCalledWith(true);
  });

  it("should call setState 3 times when closing modale", () => {
    (useStateMock as jest.Mock).mockImplementation((init) => [true, setState]);
    const wrapper = mount(<Dashboard />);
    wrapper.find(".delete").simulate("click", mockBoardData);
    wrapper.find(".modale-back").simulate("click");
    expect(setState).toHaveBeenCalledTimes(3);
    expect(setState).toHaveBeenCalledWith(mockBoardData);
    expect(setState).toHaveBeenCalledWith(false);
  });

  it("should call handleClickNextButton on confirmation", () => {
    const nextButton = jest.fn();
    (useStateMock as jest.Mock).mockImplementation((init) => [true, setState]);
    const wrapper = mount(
      <Modale
        content="test"
        title="test"
        handleClickBackButton={jest.fn()}
        handleClickNextButton={nextButton}
        setVisible={setState}
      />
    );
    wrapper.find(".modale-confirm").simulate("click");
    expect(nextButton).toHaveBeenCalledTimes(1);
  });

  it("should push the board title to history", () => {
    const expectedTitle = mockBoardData.title;
    const wrapper = mount(<Dashboard />);
    wrapper.find(".dashboard-boards__item").simulate("click");
    expect(mockHistoryPush).toHaveBeenCalledWith(`/tableaux/${expectedTitle}`);
  });
});
