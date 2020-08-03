import React from "react";
import styled from "styled-components";

import Converter from "./components/Converter";
// import Rates from "./components/Rates";

const Title = styled.h1`
  text-align: center;
  margin: 3em 0;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto;
  grid-row-gap: 1em;
`;

function App() {
  return (
    <main>
      <Title>Currency Converter</Title>
      <Container>
        <Converter />
      </Container>
    </main>
  );
}

export default App;
