import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import Counter from "./Counter";

describe("<Counter />", () => {
  it("should set the state to state + 1 when button is pressed (enzyme)", () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper.find("p").text()).toBe("0");
    wrapper.find("button").simulate("click");
    expect(wrapper.find("p").text()).toBe("1");
  });

  it("should set the state to state + 1 when button is pressed (react-test-renderer)", () => {
    const testInstance = renderer.create(<Counter />).root;
    expect(testInstance.findByType('p').children[0]).toBe("0");
    testInstance.instance.handleIncreaseCount();
    expect(testInstance.findByType('p').children[0]).toBe("1");
  });

  it("should match snapshot", () => {
    const tree = renderer.create(<Counter />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
