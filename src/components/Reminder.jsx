import React, { Component } from "react";
import styled from "styled-components";

import { Wrapper, Label, Button, Line } from "./Other";
import Item from "./ReminderItem";

const Input = styled(Label)`
  text-align: left;
  appearance: none;
  border: none;
  outline: none;
  background-color: transparent;
  flex: 1 1 auto;
  min-width: 0px;

  &::placeholder {
    color: white;
    opacity: 0.7;
  }
`;

const ToDoWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: row;
`;

class Reminder extends Component {
  input = React.createRef();

  state = { reminders: ["Buy an apple"] };

  addReminder = () => {
    const label = this.input.current.value;
    if (!label) return;
    if (this.state.reminders.indexOf(label) !== -1) return;
    this.setState({ reminders: [...this.state.reminders, label] }, () => {
      this.input.current.value = "";
    });
  };

  removeReminder = label => {
    const reminders = this.state.reminders.filter(
      reminder => reminder !== label
    );
    this.setState({ reminders });
  };

  focusInput = () => {
    this.input.current.focus();
  };

  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.addReminder();
    }
  };

  render() {
    return (
      <>
        <ToDoWrapper color="#3F79FC">
          <Input
            id="input"
            as="input"
            type="text"
            placeholder="What to do..."
            ref={this.input}
            onMouseEnter={this.focusInput}
            onKeyPress={this.handleKeyPress}
          />
          <Line />
          <Button id="submit" onClick={this.addReminder}>
            +
          </Button>
        </ToDoWrapper>

        {this.state.reminders.map(reminder => (
          <Item onRemove={this.removeReminder} key={reminder}>
            {reminder}
          </Item>
        ))}
      </>
    );
  }
}

export default Reminder;
