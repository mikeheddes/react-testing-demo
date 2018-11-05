import styled, { css } from "styled-components";

export const textStyle = css`
  color: white;
  font-weight: 500;
  font-size: 42px;
  padding: 39px 50px;
`;

const Wrapper = styled.div`
  background-color: ${({ color }) => color};
  position: relative;
  box-shadow: 8px 8px rgba(0, 0, 0, 0.15);
`;

Wrapper.defaultProps = {
  color: "#d8d8d8"
};

export { Wrapper };

const Label = styled.span`
  display: block;
  text-align: center;
  ${textStyle};
`;

export { Label };

const Button = styled.button`
  ${textStyle};
  appearance: none;
  border: none;
  outline: none;
  background-color: transparent;
  user-select: none;
  cursor: pointer;

  &:active {
    opacity: 0.5;
  }
`;

export { Button };

const Line = styled.div`
  width: 5px;
  background-color: white;
  flex: 0 0 auto;
`;

export { Line };
