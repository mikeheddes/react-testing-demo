import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { MemoryRouter } from "react-router-dom";

import RoutedPageURL, { PageURL, createRandomString } from "./PageURL";

describe("PageURL", () => {
  // Normally a functional component can just be tested with a snapshot
  // but here that doesn't work, the Link inside PageURL needs to be in
  // the react-router-dom context.
  it("throws error when rendered without router context", () => {
    console.error = jest.fn(); // removes error log from test output
    const shouldThrow = () =>
      renderer.create(<PageURL location={{ pathname: "our-url" }} />);
    expect(shouldThrow).toThrowError();
  });

  it("matches snapshot", () => {
    // The default nextUrl prop is set to create a random string.
    // This will break the snapshots everytime therefor random data
    // should never be used with snapshots.
    // Snapshot expect predictable behaviour.
    const nextUrl = "next_url";
    // Add the MemoryRouter with an initial state to inject the
    // react-router-dom context the Link component needs.
    const tree = renderer.create(
      <MemoryRouter initialEntries={["/initial_url"]} initialIndex={0}>
        <RoutedPageURL nextUrl={nextUrl} />
      </MemoryRouter>
    );
    expect(tree).toMatchSnapshot();
  });

  // Test the createRandomString generator seperatly to see if it
  // returns random strings as expected.
  describe("createRandomString", () => {
    it("returns random strings", () => {
      const val1 = createRandomString();
      expect(typeof val1).toBe("string");

      const val2 = createRandomString();
      expect(typeof val2).toBe("string");

      expect(val1).not.toBe(val2);
    });

    it("returns string of length 5", () => {
      const val1 = createRandomString();
      expect(typeof val1).toBe("string");
      expect(val1).toHaveLength(5);
    });
  });
});
