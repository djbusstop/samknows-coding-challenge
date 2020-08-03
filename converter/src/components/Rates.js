import React from "react";
import styled from "styled-components";

const Container = styled.section`
  padding: 30px;
  background-color: #f5f5f5;

  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto;
  grid-gap: 20px;

  @media (max-width: 940px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;
  }
`;

const CurrencyAndValue = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    cursor: pointer;
    p {
      color: ${({ isSelected }) => {
        return isSelected ? "#ef2e5a" : "grey";
      }};
    }
  }

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

export default ({ loadingState, target, setTarget, rates }) => {
  // If loading, don't display
  if (loadingState === "loading") return null;

  return (
    <Container>
      {Object.keys(rates).map((currency) => {
        return (
          <CurrencyAndValue
            key={currency}
            isSelected={currency === target}
            onClick={() => {
              setTarget(currency);
            }}
          >
            <p>{currency}</p>
            <span>{rates[currency].toString().slice(0, 5)}</span>
          </CurrencyAndValue>
        );
      })}
    </Container>
  );
};
