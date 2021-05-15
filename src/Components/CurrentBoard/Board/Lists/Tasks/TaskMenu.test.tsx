import { shallow } from "enzyme";
import { List } from "../../../../../Store/List/types";
import { Task } from "../../../../../Store/Tasks/types";
import { useState as useStateMock } from "react";
import TaskMenu from "./TaskMenu";

const taskData: Task = {
  desc: "Lorem ipsum dolor sit amet.",
  date: "01/21/18",
  author: "test author",
  importance: true,
  _id: "test_id",
  order: 0
};

const listData: List = {
  title: "TestList",
  color: "#ff0000",
  _id: "test01",
  order: 0,
  tasks: [taskData],
  boardID: "01",
};

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

describe("TaskMenu Component", () => {
  beforeEach(() => {
    (useStateMock as jest.Mock).mockImplementation((init) => [init, setState]);
  });
  const setState = jest.fn();
  it("should render", () => {
    const wrapper = shallow(
      <TaskMenu list={listData} task={taskData} index={0} />
    );
    expect(wrapper).toBeTruthy();
  });

  it("should render 1 form", () => {
    const wrapper = shallow(
      <TaskMenu list={listData} task={taskData} index={0} />
    );
    expect(wrapper.find("form").length).toEqual(1);
  });
  it("should render 4 button", () => {
    const wrapper = shallow(
      <TaskMenu list={listData} task={taskData} index={0} />
    );
    expect(wrapper.find("button").length).toEqual(4);
  });

  it("textarea should have task desc as initial value", () => {
    const wrapper = shallow(
      <TaskMenu list={listData} task={taskData} index={0} />
    );
    const textarea = wrapper.find("textarea");
    expect(textarea.props().value).toEqual(taskData.desc);
  });

  it("should change input value on change", () => {
    const wrapper = shallow(
      <TaskMenu list={listData} task={taskData} index={0} />
    );
    const textarea = wrapper.find("textarea");
    textarea.simulate("change", { target: { value: "test" } });
    expect(setState).toHaveBeenCalledWith("test");
  });
});
