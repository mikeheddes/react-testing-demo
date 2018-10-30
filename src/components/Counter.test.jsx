import React from "react";
// import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import Counter from "./Counter";

describe("<Counter />", () => {
  // it("should set the state to state + 1 when button is pressed", () => {
  //   const wrapper = shallow(<Counter />);
  //   expect(wrapper.state("value")).toBe(0);
  //   wrapper.find("button").simulate("click");
  //   expect(wrapper.state("value")).toBe(1);
  // });

  it("should set the state to state + 1 when button is pressed", () => {
    const testInstance = renderer.create(<Counter />).root;
    expect(testInstance.instance.state.value).toBe(0);
    testInstance.instance.handleIncreaseCount();
    expect(testInstance.instance.state.value).toBe(1);
  });

  it("should match snapshot", () => {
    const tree = renderer.create(<Counter />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
