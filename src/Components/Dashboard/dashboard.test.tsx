import { mount } from "enzyme";
import { useSelector as useSelectorMock } from "react-redux";
import Dashboard from ".";
import {
  getBoards,
  newBoard,
} from "../../Store/Tabs/actions";
import { Board } from "../../Store/Tabs/types";
import { throwNewError } from "../../Store/Message/actions";

const url =
  "https://images.pexels.com/photos/33688/delicate-arch-night-stars-landscape.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";
const alt = "space";
const image = { url, alt };
const title = "test2";
const mockBoardData: Board = {
  title: "title",
  ownerID: "ownerID",
  owner: { username: "owner" },
  image,
  _id: "_id",
};
const mockDispatch = jest.fn();
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


describe("<Dashboard />", () => {
  beforeEach(() => {
    (useSelectorMock as jest.Mock).mockImplementation(() => ({
      token: "string",
      all: [mockBoardData],
      current: mockBoardData,
      _id: "_id",
      username: "owner",
      email: "email"
    }));
  });

  it("should render nicely", () => {
    const wrapper = mount(<Dashboard />);
    expect(wrapper).toBeTruthy();
  });

  it("should dispatch getBoards() on rendering", () => {
    (useSelectorMock as jest.Mock).mockImplementation(() => ({
      token: "string",
    }));
    const wrapper = mount(<Dashboard />);
    expect(mockDispatch).toHaveBeenCalledWith(getBoards());
  });

  it("should open the modale", () => {
    const wrapper = mount(<Dashboard />);
    const deleteButton = wrapper.find(".delete");
    deleteButton.simulate("click", mockBoardData);
    expect(wrapper.find(".modale").length).toEqual(1);
  });

  it("should close the modale", () => {
    const wrapper = mount(<Dashboard />);
    wrapper.find(".delete").simulate("click", mockBoardData);
    wrapper.find(".modale-back").simulate("click");
    expect(wrapper.find(".modale").length).toEqual(0);
  });

  it("should push the board title to history", () => {
    const expectedTitle = mockBoardData.title;
    const wrapper = mount(<Dashboard />);
    wrapper.find(".dashboard-boards__item--container").simulate("click");
    expect(mockHistoryPush).toHaveBeenCalledWith(`/tableaux/${expectedTitle}`);
  });

  it("should return an error 'no image' when adding a new board", () => {
    const wrapper = mount(<Dashboard />);
    wrapper.find(".dashboard-create").simulate("click");
    const boardForm = wrapper.find(".dashboard-form");
    const input = wrapper.find(".dashboard-form-input");
    input.simulate("change", { target: { value: "title" } });
    boardForm.simulate("submit");
    expect(mockDispatch).toHaveBeenCalledWith(
      throwNewError("Veuillez selectionner une image")
    );
  });

  it("should call dispatch when submitting form", () => {
    const wrapper = mount(<Dashboard />);
    wrapper.find(".dashboard-create").simulate("click");
    wrapper.find(".dashboard-form-pics-btn-0").simulate("click");
    wrapper
      .find(".dashboard-form-input")
      .simulate("change", { target: { value: "title" } });
    wrapper.find(".dashboard-form-input").simulate("submit");
    expect(mockDispatch).toHaveBeenCalled();
  });
});
