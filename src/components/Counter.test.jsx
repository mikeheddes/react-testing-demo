import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { Label } from "./Other";
import Counter from "./Counter";

describe("<Counter />", () => {
  it("should set the state to state + 1 when button is pressed (enzyme)", () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper.find(Label).text()).toEqual("0");

    wrapper.find('[data-testid="inc"]').simulate("click");
    expect(wrapper.find(Label).text()).toEqual("1");

    wrapper.find('[data-testid="dec"]').simulate("click");
    expect(wrapper.find(Label).text()).toEqual("0");
  });

  it("should match snapshot", () => {
    const tree = renderer.create(<Counter />);
    expect(tree).toMatchSnapshot();
  });
});
