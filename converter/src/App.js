import React, { useEffect } from "react";
import styled from "styled-components";

import Converter from "./components/Converter";
// import Rates from "./components/Rates";

import useGetRates from "./hooks/getRates";

const AppContainer = styled.main`
  padding: 0 30px;
`;

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
  const [loadingState, base, currencies, rates, getRates] = useGetRates();

  // Get rates for Euro on page load
  useEffect(() => {
    getRates();
  }, []);

  return (
    <AppContainer>
      <Title>Currency Converter</Title>
      <Container>
        <Converter {...{ loadingState, base, currencies, rates, getRates }} />
      </Container>
    </AppContainer>
  );
}

export default App;
