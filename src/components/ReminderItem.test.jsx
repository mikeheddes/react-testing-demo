import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import ToDoItem from "./ReminderItem";

describe("<ReminderItem />", () => {
  it("match snapshot", () => {
    const tree = renderer.create(
      <ToDoItem>
        The Label
      </ToDoItem>);
    expect(tree).toMatchSnapshot();
  });
});
