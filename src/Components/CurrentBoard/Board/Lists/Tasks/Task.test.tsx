import { shallow } from "enzyme";
import { Tasks } from "../../../../../Store/Tabs/types";
import { useState as useStateMock } from "react";
import Task from "./Task";
import TaskMenu from "./TaskMenu";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

describe("Task Component", () => {
  const setState = jest.fn();

  beforeEach(() => {
    (useStateMock as jest.Mock).mockImplementation((init) => [false, setState]);
  });

  const taskData: Tasks = {
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, cupiditate?",
    date: "01/02/2021",
    author: "test author",
    importance: true,
  };

  const index = 0;

  it("should render", () => {
    const wrapper = shallow(<Task task={taskData} index={index} />);
    expect(wrapper.length).toBeTruthy();
  });

  it("should render the Task Desc", () => {
    const wrapper = shallow(<Task task={taskData} index={index} />);
    const desc = wrapper.find(".task-desc");
    expect(desc.length).toEqual(1);
    expect(desc.text()).toEqual(taskData.desc);
  });

  it("should render the Task date", () => {
    const wrapper = shallow(<Task task={taskData} index={index} />);
    const date = wrapper.find("time");
    expect(date.length).toEqual(1);
    expect(date.text()).toEqual(taskData.date);
  });

  it("should render the task author", () => {
    const wrapper = shallow(<Task task={taskData} index={index} />);
    const author = wrapper.find(".task-author");
    expect(author.length).toEqual(1);
    expect(author.text()).toEqual(taskData.author);
  });

  it("should show the task importance", () => {
    const wrapper = shallow(<Task task={taskData} index={index} />);
    const importance = wrapper.find(".task-importance");
    expect(importance.length).toEqual(1);
  });

  it("should render menu button", () => {
    const wrapper = shallow(<Task task={taskData} index={index} />);
    const button = wrapper.find(".button-icon");
    expect(button.length).toEqual(1);
  });

  it("should open the task menu", () => {
    const wrapper = shallow(<Task task={taskData} index={index} />);
    const button = wrapper.find(".button-icon");
    button.simulate("click");
    expect(setState).toHaveBeenCalled();
  });

  it("should render the task menu", () => {
      (useStateMock as jest.Mock).mockImplementation((init) => [
        true,
        setState,
      ]);
      const wrapper = shallow(<Task task={taskData} index={index} />);
      const taskMenu = wrapper.find(TaskMenu);
      expect(taskMenu.length).toBeTruthy();
  });
});
