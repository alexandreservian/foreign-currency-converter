import React from "react";
import FormCurrencyConverter from "components/form-currency-converter";
import ConversionResult from "components/conversion-result";
import { Container, Box, Title } from "./style";

function App() {
  return (
    <Container>
      <Box>
        <Title>Foreign Currency Converter</Title>
        <FormCurrencyConverter />
        <ConversionResult />
      </Box>
    </Container>
  );
}

export default App;
