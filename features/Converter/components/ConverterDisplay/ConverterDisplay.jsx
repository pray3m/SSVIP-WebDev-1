import { Box, Text } from "@chakra-ui/react";

const ConverterDisplay = ({
  amount,
  currencyOne,
  currencyTwo,
  convertedAmount,
  date,
  time,
}) => {
  return (
    <Box textAlign="right">
      <Text fontSize="lg" fontWeight="bold" color="gray.300">
        {amount} {currencyOne}
      </Text>

      <Text fontSize="3xl" fontWeight="bold" color="purple.500">
        {convertedAmount} {currencyTwo}
      </Text>

      <Text fontSize="xs" color="gray.400">
        Market rates as of - {date} {time}
      </Text>
    </Box>
  );
};

export default ConverterDisplay;
