import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.section`
  width: 300px;
  padding: 30px;
  background-color: #f5f5f5;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SwitchButton = styled.button`
  margin: 20px 0;
  background: #ef2e5a;
  padding: 10px 20px;
  box-shadow: none;
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: 600;

  &:hover {
    cursor: pointer;
  }

  &:active {
    background: purple;
  }
`;

const AmountInputContainer = styled.div`
  margin: 50px 0 70px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BaseValue = styled.span`
  margin: 0;
  align-self: flex-end;
`;

const TargetValue = styled.h3`
  margin: 0;
  font-size: 40px;
  font-weight: normal;
  align-self: flex-end;
`;

const formatCurency = (value) => {
  const parts = value.toString().split(".");
  if (parts.length === 0 || parts.length === 1) return value;
  const fraction = parts[1].slice(0, 2);
  return `${parts[0]}.${fraction}`;
};

export default ({ loadingState, base, currencies, rates, getRates }) => {
  const [baseCurrency, setBaseCurrency] = useState();
  const [targetCurrency, setTargetCurrency] = useState();

  const [inputValue, setInputValue] = useState(0);
  const [convertedValue, setConvertedValue] = useState(0);

  useEffect(() => {
    if (loadingState === "success") {
      // Once base is loaded
      if (base && currencies) {
        // Set currencies in dropdown
        setBaseCurrency(base);
        if (!targetCurrency) {
          setTargetCurrency(currencies[0]);
        }
      }
    }
  }, [loadingState, base]);

  // If base currency changes, then refetch rates
  useEffect(() => {
    getRates(baseCurrency);
  }, [baseCurrency]);

  // Convert
  useEffect(() => {
    if (loadingState === "success") {
      setConvertedValue(inputValue * rates[targetCurrency]);
    }
  }, [baseCurrency, targetCurrency, inputValue, rates]);

  // If loading, don't display
  if (loadingState === "loading") return null;

  return (
    <Container>
      <label for="base-currency">Base</label>
      <select
        name="base"
        id="base-currency"
        onChange={(e) => {
          setBaseCurrency(e.target.value);
        }}
        value={baseCurrency}
      >
        <option value={base}>{base}</option>
        {currencies.map((currency) => {
          return (
            <option key={currency} value={currency}>
              {currency}
            </option>
          );
        })}
      </select>

      <SwitchButton
        onClick={() => {
          const newTarget = baseCurrency;
          const newBase = targetCurrency;
          setBaseCurrency(newBase);
          setTargetCurrency(newTarget);
        }}
      >
        Switch
      </SwitchButton>

      <label for="target-currency">Target</label>
      <select
        name="targe"
        id="target-currency"
        onChange={(e) => {
          setTargetCurrency(e.target.value);
        }}
        value={targetCurrency}
      >
        <option value={base}>{base}</option>
        {currencies.map((currency) => {
          return (
            <option key={currency} value={currency}>
              {currency}
            </option>
          );
        })}
      </select>

      <AmountInputContainer>
        <label for="amount">Amount</label>
        <input
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          value={inputValue}
          type="text"
        />
      </AmountInputContainer>

      <BaseValue>
        {inputValue} {baseCurrency} =
      </BaseValue>
      <TargetValue>
        {formatCurency(convertedValue)} {targetCurrency}
      </TargetValue>
    </Container>
  );
};
