import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { MemoryRouter } from "react-router-dom";
import RoutedPageURL, { PageUrl } from "./PageURL";

describe("PageURL", () => {
  // normally a functional component can just be tested with a snapshot
  xit("matches a snapshot", () => {
    //   doesn't work, the link needs to be in a router
    const tree = renderer.create(
      <PageUrl location={{ pathname: "our-url" }} />
    );
    expect(tree).toMatchSnapshot();
  });
  it("wrapped snapshot", () => {
    //   breaks every time you run your test
    // snapshots expect *predictable* behaviour
    // *random* data should never be used with snapshots
    const tree = renderer.create(
      <MemoryRouter initialEntries={["/en"]} initialIndex={0}>
        <RoutedPageURL />
      </MemoryRouter>
    );
    expect(tree).toMatchSnapshot();
  });
});
