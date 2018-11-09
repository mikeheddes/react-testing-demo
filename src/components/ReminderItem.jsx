import React, { Component } from "react";
import styled from "styled-components";

import { Wrapper, Label, Button, Line } from "./Other";

const ItemWrapper = styled(Wrapper)`
  margin: 30px 0;
  display: flex;
  flex-direction: row;
`;

const StyledLabel = styled(Label)`
  padding: 20px 30px;
  font-size: 34px;
  flex: 1 1 auto;
  text-align: left;
`;

const StyledButton = styled(Button)`
  padding: 20px 30px;
  font-size: 34px;
`;

const Rotate = styled.span`
  transform: rotate(45deg);
  transform-origin: center;
  display: inline-block;
`;

class ToDoItem extends Component {
  handleRemove = () => {
    const { children, onRemove } = this.props;
    onRemove(children);
  };

  render() {
    const { children } = this.props;
    return (
      <ItemWrapper color="#495265">
        <StyledLabel>{children}</StyledLabel>
        <Line />
        <StyledButton onClick={this.handleRemove}>
          <Rotate>+</Rotate>
        </StyledButton>
      </ItemWrapper>
    );
  }
}

export default ToDoItem;