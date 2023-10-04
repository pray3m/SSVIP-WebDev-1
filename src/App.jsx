import { Flex } from "@chakra-ui/react";
import Converter from "../features/Converter";

function App() {
  return (
    <>
      <Flex height="100vh" justifyContent="center">
        <Converter />
      </Flex>
    </>
  );
}

export default App;
