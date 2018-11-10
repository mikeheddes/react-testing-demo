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

  state = { reminders: ["Buy an apple"], value: "" };

  addReminder = () => {
    const label = this.state.value;
    if (!label) return;
    if (this.state.reminders.indexOf(label) !== -1) return;
    this.setState({
      reminders: [...this.state.reminders, label],
      value: ""
    });
  };

  removeReminder = i => {
    const reminders = [...this.state.reminders];
    reminders.splice(i, 1);
    this.setState({ reminders });
  };

  focusInput = () => {
    this.input.current.focus();
  };

  handleInputChange = e => {
    this.setState({ value: e.target.value });
  };

  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.addReminder();
    }
  };

  render() {
    const { reminders, value } = this.state;
    return (
      <>
        <ToDoWrapper color="#3F79FC">
          <Input
            as="input"
            type="text"
            value={value}
            placeholder="What to do..."
            ref={this.input}
            onMouseEnter={this.focusInput}
            onChange={this.handleInputChange}
            onKeyPress={this.handleKeyPress}
          />
          <Line />
          <Button onClick={this.addReminder}>+</Button>
        </ToDoWrapper>

        {reminders.map((reminder, i) => (
          <Item onRemove={() => this.removeReminder(i)} key={reminder}>
            {reminder}
          </Item>
        ))}
      </>
    );
  }
}

export default Reminder;
