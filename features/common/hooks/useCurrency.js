import { useQueries } from "@tanstack/react-query";
import { useState } from "react";
import { fetchRates, fetchSymbols } from "../../Converter/api/fetchData";

export const useCurrency = () => {
  const [amount, setAmount] = useState(25);
  const [currencyOne, setCurrencyOne] = useState("EUR");
  const [currencyTwo, setCurrencyTwo] = useState("EUR");

  const [ratesData, symbolsData] = useQueries({
    queries: [
      {
        queryKey: ["rates", currencyOne],
        queryFn: () => fetchRates(currencyOne),
        staleTime: Infinity,
        select: ({ rates, date, timestamp }) => ({ rates, date, timestamp }),
      },
      {
        queryKey: ["symbols"],
        queryFn: () => fetchSymbols(),
        staleTime: Infinity,
        select: ({ symbols }) => ({ symbols }),
      },
    ],
  });

  const isLoading = [ratesData, symbolsData].some((query) => query.isLoading);
  const isError = [ratesData, symbolsData].some((query) => query.isError);

  return { amount, currencyOne, currencyTwo };
};
