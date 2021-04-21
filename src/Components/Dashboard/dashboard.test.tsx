import { mount } from "enzyme";
import { useSelector as useSelectorMock } from "react-redux";
import React, { useReducer, useState as useStateMock } from "react";
import Dashboard from ".";
import {
  deleteBoard,
  getBoards,
  GET_BOARDS,
  newBoard,
  NEW_BOARD,
} from "../../Store/Tabs/actions";
import { Board } from "../../Store/Tabs/types";
import Modale from "../Modale";
import { throwNewError } from "../../Store/Message/actions";
import { initialState, reducer } from "./utils";
import { renderHook } from "@testing-library/react-hooks";
import { act } from "react-dom/test-utils";

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

const url =
  "https://images.pexels.com/photos/33688/delicate-arch-night-stars-landscape.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";
const alt = "space";
const image = { url, alt };
const title = "test2";

describe("<Dashboard />", () => {
  beforeEach(() => {
    (useSelectorMock as jest.Mock).mockImplementation(() => ({
      token: "string",
      all: [mockBoardData],
      current: mockBoardData,
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
    expect(wrapper.find(".modale")).toHaveLength(1);
  });

  it("should close the modale", () => {
    const wrapper = mount(<Dashboard />);
    wrapper.find(".delete").simulate("click", mockBoardData);
    wrapper.find(".modale-back").simulate("click");
    expect(wrapper.find(".modale")).toHaveLength(0);
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
    input.simulate("change", { target: { value: "test2" } });
    boardForm.simulate("submit");
    expect(mockDispatch).toHaveBeenCalledWith(
      throwNewError("Veuillez selectionner une image")
    );
  });
});
