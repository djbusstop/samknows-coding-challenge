import React, { useState } from "react";

export default () => {
  const [loadingState, setLoadingState] = useState("loading");
  const [rates, setRates] = useState();
  const [base, setBase] = useState();
  const [target, setTarget] = useState();
  const [currencies, setCurrencies] = useState();

  const getRates = async (currency) => {
    try {
      const response = await fetch(
        `https://api.exchangeratesapi.io/latest${
          currency ? `?base=${currency}` : ""
        }`
      );
      const body = await response.json();

      // If rates doesn't include Euro
      const ratesValues = !Object.keys(body.rates).includes("EUR")
        ? // Add euro to list
          {
            ...body.rates,
            EUR: 1
          }
        : // Use default rates
          body.rates;

      // Sort rates alphabetically
      const sortedRates = Object.keys(ratesValues)
        .sort((a, b) => (a < b ? 1 : 0))
        .reduce(
          (acc, rateKey) => ({
            [rateKey]: ratesValues[rateKey],
            ...acc
          }),
          {}
        );

      await setBase(body.base);
      await setRates(sortedRates);
      await setCurrencies(Object.keys(sortedRates));
      await setLoadingState("success");
    } catch (e) {
      setLoadingState("error");
    }
  };

  return [
    loadingState,
    base,
    setBase,
    target,
    setTarget,
    currencies,
    rates,
    getRates
  ];
};
