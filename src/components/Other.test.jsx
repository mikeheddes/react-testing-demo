import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import { Wrapper, Button, Label, Line } from "./Other";

describe("Other contains a series of styled components", () => {
  it("snapshot wrapper", () => {
    const tree = renderer.create(<Wrapper color="fff" />);
    expect(tree).toMatchSnapshot();
  });
  
  it("snapshot button", () => {
    const tree = renderer.create(<Button />);
    expect(tree).toMatchSnapshot();
  });

  it("snapshot label", () => {
    const tree = renderer.create(<Label />);
    expect(tree).toMatchSnapshot();
  });

  it("snapshot line", () => {
    const tree = renderer.create(<Line />);
    expect(tree).toMatchSnapshot();
  });
});
