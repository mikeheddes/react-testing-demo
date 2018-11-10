import React from "react";
import { mount } from "enzyme";
import "jest-styled-components";

import Reminder from "./Reminder";

describe("<Reminder />", () => {
  it("user can add a reminder with button", () => {
    const wrapper = mount(<Reminder />);

    const input = wrapper.find("input");
    input.simulate("change", { target: { value: "Write more tests" } });

    expect(wrapper.state("value")).toBe("Write more tests");

    const submit = wrapper.find("button").first();
    submit.simulate("click");

    expect(wrapper.state("reminders")).toContain("Write more tests");
  });

  it("user can add a reminder with ENTER key", () => {
    const wrapper = mount(<Reminder />);

    const input = wrapper.find("input");
    input.simulate("change", { target: { value: "Write more tests" } });

    expect(wrapper.state("value")).toBe("Write more tests");

    input.simulate("keyPress", { key: "r" });
    expect(wrapper.state("reminders")).not.toContain("Write more tests");

    input.simulate("keyPress", { key: "Enter" });
    expect(wrapper.state("reminders")).toContain("Write more tests");
  });

  it("does not allow empty reminders to be submited", () => {
    const wrapper = mount(<Reminder />);

    const initialLength = wrapper.find("ToDoItem").length;

    const submit = wrapper.find("button").first();
    submit.simulate("click");

    const nextLength = wrapper.find("ToDoItem").length;
    expect(initialLength).toBe(nextLength);
  });

  it("does not allow duplicate reminders", () => {
    const wrapper = mount(<Reminder />);

    const addItem = () => {
      wrapper.setState({ value: "Some reminder" });
      wrapper.instance().addReminder();
      wrapper.update()
    };

    addItem();
    const firstLength = wrapper.find("ToDoItem").length;

    addItem();
    const nextLength = wrapper.find("ToDoItem").length;

    expect(nextLength).toBe(firstLength);
  });

  it("allows the user to remove a reminder", () => {
    const wrapper = mount(<Reminder />);

    expect(wrapper.find("ToDoItem")).toHaveLength(1);

    const FirstTodoItem = wrapper.find("ToDoItem");
    const removeButton = FirstTodoItem.find("button");
    removeButton.simulate("click");

    expect(wrapper.find("ToDoItem")).toHaveLength(0);
  });

  it("focus the input when the mouse enters", () => {
    const wrapper = mount(<Reminder />);

    const inputElement = wrapper.find("input");
    const { input } = wrapper.instance();

    jest.spyOn(input.current, "focus");

    inputElement.simulate("mouseEnter");

    expect(input.current.focus).toHaveBeenCalled();
  });
});
