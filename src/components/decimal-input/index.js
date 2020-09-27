import React from "react";
import NumberFormat from "react-number-format";
import Container from "./style";

const DecimalInput = () => {
  return (
    <Container>
      <NumberFormat
        className="input"
        thousandSeparator={"."}
        decimalSeparator={","}
        decimalScale={2}
      />
    </Container>
  );
};

export default DecimalInput;
