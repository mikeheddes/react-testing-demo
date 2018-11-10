import React from "react";
import PropTypes from "prop-types";
import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";

import { Wrapper, Label } from "./Other";

export function createRandomString() {
  return Math.random()
    .toString(26)
    .slice(3, 8);
}

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const PageURL = ({ location: { pathname }, nextUrl }) => (
  <StyledLink
    to={typeof nextUrl === "function" ? nextUrl() : nextUrl}
    alt="Click for new random url"
    title="Click for new random url"
  >
    <Wrapper color="#FAA138">
      <Label>URL: {pathname}</Label>
    </Wrapper>
  </StyledLink>
);

PageURL.propTypes = {
  nextUrl: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

PageURL.defaultProps = {
  nextUrl: createRandomString
};

export default withRouter(PageURL);
