import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import "jest-styled-components";

import HOCScreenWidth, { ScreenWidth } from "./ScreenWidth";

describe("<ScreenWidth />", () => {
  it("should provide the window.innerWidth as width prop", () => {
    global.window.innerWidth = 456;
    const wrapper = shallow(<HOCScreenWidth />);
    expect(wrapper.find(ScreenWidth).prop("width")).toBe(456);
  });

  it("should update the width on resize event", () => {
    global.window.innerWidth = 567;
    const wrapper = shallow(<HOCScreenWidth />);
    expect(wrapper.find(ScreenWidth).prop("width")).toBe(567);
    global.window.innerWidth = 678;
    // Resize event should be triggerd here
    wrapper.instance().handleResize();
    expect(wrapper.find(ScreenWidth).prop("width")).toBe(678);
  });

  it("should match snapshot", () => {
    const tree = renderer.create(<ScreenWidth width={345} />);
    expect(tree).toMatchSnapshot();
  });
});
