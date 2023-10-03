import { useCurrency } from "../common/hooks/useCurrency";

const Converter = () => {
  const { amount, currencyOne, currencyTwo } = useCurrency();

  return (
    <>
      <p>{amount}</p>
      <p>{currencyOne}</p>
      <p>{currencyTwo}</p>
    </>
  );
};

export default Converter;
