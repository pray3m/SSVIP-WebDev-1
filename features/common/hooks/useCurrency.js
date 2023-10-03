import { useState } from "react";

export const useCurrency = () => {
  const [amount, setAmount] = useState(25);
  const [currencyOne, setCurrencyOne] = useState("USD");
  const [currencyTwo, setCurrencyTwo] = useState("EUR");

  return { amount, currencyOne, currencyTwo };
};
