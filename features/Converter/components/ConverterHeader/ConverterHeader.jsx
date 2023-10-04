import { Box, Text } from "@chakra-ui/react";

const ConverterHeader = () => {
  return (
    <Box
      textAlign="center"
      color="white"
      marginTop={{ base: "4", sm: "20" }}
      marginBottom={{ base: "8", sm: "10" }}
    >
      <Text
        fontSize="3xl"
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontWeight="extrabold"
      >
        Currency Converter and Exchange Rates
      </Text>
      <Text fontWeight="light" fontSize="smaller">
        ( Up to date FX rates for 170+ currencies sourced from the fixer.io API
        )
      </Text>
    </Box>
  );
};

export default ConverterHeader;
