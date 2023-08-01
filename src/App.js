import "./App.css";
import * as React from "react";
import { Landing } from "./landing/Landing";
import { styled } from "styled-components";

const Container = styled.div`
  background-color: #272829;
  height: 100vh;
  width: 100vw;
`;

const App = () => {
  return (
    <Container className="App">
      <Landing />
    </Container>
  );
};

export default App;
