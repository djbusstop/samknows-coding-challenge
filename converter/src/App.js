import React, { useEffect } from "react";
import styled from "styled-components";

import Converter from "./components/Converter";
import Rates from "./components/Rates";

import useGetRates from "./hooks/getRates";

const AppContainer = styled.main`
  max-width: 960px;
  margin: 0 auto 2em auto;
  padding: 40px;
`;

const Title = styled.h1`
  text-align: center;
  margin: 2em 0;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto;
  grid-column-gap: 3em;

  @media (max-width: 940px) {
    grid-template-columns: auto;
    grid-row-gap: 2em;
  }
`;

function App() {
  const [
    loadingState,
    base,
    setBase,
    target,
    setTarget,
    currencies,
    rates,
    getRates
  ] = useGetRates();

  // Get rates for Euro on page load
  useEffect(() => {
    getRates();
  }, []);

  return (
    <AppContainer>
      <Title>Currency Converter</Title>
      <Container>
        <Converter
          {...{
            loadingState,
            base,
            setBase,
            target,
            setTarget,
            currencies,
            rates,
            getRates
          }}
        />
        <Rates {...{ loadingState, target, setTarget, rates }} />
      </Container>
    </AppContainer>
  );
}

export default App;
