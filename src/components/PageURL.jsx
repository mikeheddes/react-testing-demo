import React from "react";
import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";

import { Wrapper, Label } from "./Other";

function createRandomString() {
  return Math.random()
    .toString(26)
    .slice(3, 8);
}

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const PageUrl = ({ location: { pathname } }) => (
  <StyledLink
    to={createRandomString()}
    alt="Click for new random url"
    title="Click for new random url"
  >
    <Wrapper color="#FAA138">
      <Label>URL: {pathname}</Label>
    </Wrapper>
  </StyledLink>
);

export default withRouter(PageUrl);
