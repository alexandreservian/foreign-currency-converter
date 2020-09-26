import React from "react";
import FormCurrencyConverter from "components/form-currency-converter";
import ConversionResult from "components/conversion-result";

function App() {
  return (
    <div>
      <FormCurrencyConverter />
      <ConversionResult />
    </div>
  );
}

export default App;
