import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import "jest-styled-components";

import HOCScreenWidth, { ScreenWidth } from "./ScreenWidth";

let attachedEvents = {};

describe("<ScreenWidth />", () => {
  beforeEach(() => {
    attachedEvents = {};
    global.window.addEventListener = jest.fn((event, cb) => {
      attachedEvents[event] = cb;
    });

    global.window.removeEventListener = jest.fn((event, cb) => {
      delete attachedEvents[event];
    });

    global.requestAnimationFrame = jest.fn(cb => {
      cb();
    });

  });

  it("provide the window.innerWidth as width prop", () => {
    global.window.innerWidth = 456;
    const wrapper = shallow(<HOCScreenWidth />);
    expect(wrapper.find(ScreenWidth).prop("width")).toBe(456);
  });

  it("attaches and removes resize eventListener", () => {
    const wrapper = shallow(<HOCScreenWidth />);
    expect(typeof attachedEvents.resize).toBe('function')
    wrapper.unmount();
    expect(attachedEvents.resize).toBeUndefined()
  });

  it("update the width on resize event", () => {
    global.window.innerWidth = 567;

    const wrapper = shallow(<HOCScreenWidth />);
    expect(wrapper.find(ScreenWidth).prop("width")).toBe(567);

    global.window.innerWidth = 678;
    attachedEvents.resize();
    wrapper.update();

    expect(wrapper.find(ScreenWidth).prop("width")).toBe(678);

    wrapper.unmount();
    expect(attachedEvents.resize).toBeUndefined()
  });

  it("ignore resize event if still updating", () => {
    global.window.innerWidth = 567;

    const wrapper = shallow(<HOCScreenWidth />);
    expect(wrapper.find(ScreenWidth).prop("width")).toBe(567);

    wrapper.instance().updating = true;

    global.window.innerWidth = 678;
    attachedEvents.resize();
    wrapper.update();

    expect(wrapper.find(ScreenWidth).prop("width")).toBe(567);
  });

  it("should match snapshot", () => {
    const tree = renderer.create(<ScreenWidth width={345} />);
    expect(tree).toMatchSnapshot();
  });
});
