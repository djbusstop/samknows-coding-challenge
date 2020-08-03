import React, { useState } from "react";

export default () => {
  const [loadingState, setLoadingState] = useState("loading");
  const [rates, setRates] = useState(undefined);
  const [base, setBase] = useState(undefined);
  const [currencies, setCurrencies] = useState(undefined);

  const getRates = async (currency) => {
    try {
      console.log("getting with", currency);
      const response = await fetch(
        `https://api.exchangeratesapi.io/latest${
          currency ? `?base=${currency}` : ""
        }`
      );
      const body = await response.json();
      await setBase(body.base);
      await setRates(body.rates);
      await setCurrencies(Object.keys(body.rates));
      await setLoadingState("success");
    } catch (e) {
      setLoadingState("error");
    }
  };

  return [loadingState, base, currencies, rates, getRates];
};
