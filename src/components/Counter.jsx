import React, { Component } from "react";
import styled from "styled-components";

import { Wrapper, Label, Button, Line } from "./Other";

const StyledButton = styled(Button)`
  width: 50%;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 0;

  &:first-of-type {
    text-align: left;
    left: 0;
    right: 50%;
  }

  &:last-of-type {
    text-align: right;
    left: 50%;
    right: 0;
  }
`;

const StyledLine = styled(Line)`
  position: absolute;
  left: calc(50% - 5px / 2);
  height: 28px;

  &:first-of-type {
    top: 0;
  }

  &:last-of-type {
    bottom: 0;
  }
`;

class Counter extends Component {
  state = { value: 0 };

  handleDecreaseCount = () => {
    this.setState({ value: this.state.value - 1 });
  };

  handleIncreaseCount = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    const { value } = this.state;
    return (
      <Wrapper color="#eb4b4b">
        <StyledButton data-testid="dec" onClick={this.handleDecreaseCount}>
          -
        </StyledButton>
        <Label>{value}</Label>
        <StyledButton data-testid="inc" onClick={this.handleIncreaseCount}>
          +
        </StyledButton>
        <StyledLine />
        <StyledLine />
      </Wrapper>
    );
  }
}

export default Counter;
