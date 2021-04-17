import { mount } from "enzyme";
import { useSelector as useSelectorMock } from "react-redux";
import { useState as useStateMock } from "react";
import Dashboard from ".";
import { getBoards } from "../../Store/Tabs/actions";
import { Board } from "../../Store/Tabs/types";

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

  it("should open the modale", () => {
    const wrapper = mount(<Dashboard />);
    const deleteButton = wrapper.find(".delete");
    deleteButton.simulate("click", mockBoardData);
    expect(setState).toHaveBeenCalledTimes(2);
    expect(setState).toHaveBeenCalledWith(mockBoardData);
    expect(setState).toHaveBeenCalledWith(true);
  });
});
