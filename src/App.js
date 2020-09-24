import React from "react";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import CurrencyConverter from "components/currency-converter";

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <CurrencyConverter />
    </ThemeProvider>
  );
}

export default App;
