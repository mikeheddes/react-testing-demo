import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import Counter from "./Counter";
import "jest-styled-components";
import { Label } from "./Other";

describe("<Counter />", () => {
  it("should set the state to state + 1 when button is pressed (enzyme)", () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper.find(Label).text()).toEqual("0");
    wrapper.find("#inc").simulate("click");
    expect(wrapper.find(Label).text()).toEqual("1");
    wrapper.find("#dec").simulate("click");
    expect(wrapper.find(Label).text()).toEqual("0");
  });
  // you can add a snapshot here too.
});
