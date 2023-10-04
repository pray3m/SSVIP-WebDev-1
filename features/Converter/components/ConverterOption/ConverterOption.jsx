import { Flex, Select } from "@chakra-ui/react";

const ConverterOption = ({
  symbol,
  currencyList,
  onCurrencyChange,
  currency,
}) => {
  console.log(currencyList, currency);
  return (
    <Flex gap="1rem" shadow="md" padding="1rem " borderRadius="lg">
      <Select
        placeholder="Select Currency"
        variant="unstyled"
        size="md"
        defaultValue={currency}
        onChange={(e) => onCurrencyChange(e.target.value)}
      >
        {currencyList.map((currency) => {
          return (
            <option key={currency} value={currency}>
              {currency} - {symbol[currency]}
            </option>
          );
        })}
      </Select>
    </Flex>
  );
};

export default ConverterOption;
