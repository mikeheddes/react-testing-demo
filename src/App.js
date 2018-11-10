import React from "react";
import styled from "styled-components";
import { HashRouter } from "react-router-dom";

import Counter from "./components/Counter";
import ScreenWidth from "./components/ScreenWidth";
import PageURL from "./components/PageURL";
import Reminder from "./components/Reminder";

const Box = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 80px auto;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  font-weight: 600;
  font-size: 42px;
  color: #222;
`;

const App = () => (
  <HashRouter>
    <>
      <Box>
        <Title>Counter</Title>
        <Counter />
      </Box>
      <Box>
        <Title>ScreenWidth</Title>
        <ScreenWidth />
      </Box>
      <Box>
        <Title>PageURL</Title>
        <PageURL />
      </Box>
      <Box>
        <Title>Reminder</Title>
        <Reminder />
      </Box>
    </>
  </HashRouter>
);

export default App;
