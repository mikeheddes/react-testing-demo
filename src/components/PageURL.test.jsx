import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { MemoryRouter } from "react-router-dom";

import RoutedPageURL, { PageUrl } from "./PageURL";

describe("PageURL", () => {
  // normally a functional component can just be tested with a snapshot
  // but it doesn't work, the link needs to be in the router context
  it("doesn't match snapshot", () => {
    const shouldThrow = () =>
      renderer.create(<PageUrl location={{ pathname: "our-url" }} />);
    expect(shouldThrow).toThrowError();
  });

  it("wrapped snapshot", () => {
    // breaks every time you run the test
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
