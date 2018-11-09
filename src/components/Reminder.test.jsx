import React from "react";
import { mount } from "enzyme";
import "jest-styled-components";

import Reminder from "./Reminder";

describe("reminders", () => {
  it("the user can add a reminder", () => {
    const wrapper = mount(<Reminder />);
    const input = wrapper.find("input");
    input.instance().value = "Write more tests";

    const submit = wrapper.find("#submit").first();
    submit.simulate("click");
    expect(wrapper.state()).toEqual({
      reminders: ["Buy an apple", "Write more tests"]
    });
    // or check the length of TodoItems
    expect(wrapper.find("ToDoItem")).toHaveLength(2);
  });

  it("does not allow empty reminders to be submited", () => {
    const wrapper = mount(<Reminder />);
    const submit = wrapper.find("#submit").first();
    submit.simulate("click");
    expect(wrapper.state()).toEqual({ reminders: ["Buy an apple"] });
  });

  it("does not allow duplicate reminders", () => {
    const wrapper = mount(<Reminder />);
    const input = wrapper.find("input");
    input.instance().value = "Buy an apple";
    const submit = wrapper.find("#submit").first();
    submit.simulate("click");
    expect(wrapper.state()).toEqual({
      reminders: ["Buy an apple"]
    });
  });

  it("allows the user to remove a reminder", () => {
    const wrapper = mount(<Reminder />);
    const FirstTodoItem = wrapper.find("ToDoItem");
    const removeButton = FirstTodoItem.find("button");
    removeButton.simulate("click");
    expect(wrapper.state()).toEqual({
      reminders: []
    });
    expect(wrapper.find("ToDoItem")).toHaveLength(0);
  });

  it("focus the input when the mouse enters", () => {
    const wrapper = mount(<Reminder />);
    const inputElement = wrapper.find("input");
    const { input } = wrapper.instance();
    jest.spyOn(input.current, "focus");
    inputElement.simulate("mouseEnter");
    expect(input.current.focus).toHaveBeenCalledTimes(1);
  });
});
