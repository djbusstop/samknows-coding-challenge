import React from "react";
import styled from "styled-components";

const Container = styled.section`
  padding: 30px;
  background-color: #f5f5f5;

  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto;
  grid-gap: 20px;
`;

const CurrencyAndValue = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 18px;
    margin: 0;
    color: ${({ isSelected }) => {
      return isSelected ? "#ef2e5a" : "black";
    }};
  }

  span {
    font-size: 16px;
    color: grey;
  }
`;

export default ({ loadingState, target, rates }) => {
  // If loading, don't display
  if (loadingState === "loading") return null;

  return (
    <Container>
      {Object.keys(rates).map((currency) => {
        return (
          <CurrencyAndValue isSelected={currency === target}>
            <p>{currency}</p>
            <span>{rates[currency].toString().slice(0, 5)}</span>
          </CurrencyAndValue>
        );
      })}
    </Container>
  );
};
