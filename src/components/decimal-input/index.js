import React from "react";
import { useField } from "formik";
import NumberFormat from "react-number-format";
import Container from "./style";

const DecimalInput = ({ name }) => {
  const [, , helpers] = useField(name);
  const { setValue } = helpers;

  return (
    <Container>
      <NumberFormat
        type="tel"
        className="input"
        name={name}
        thousandSeparator={"."}
        decimalSeparator={","}
        decimalScale={2}
        onValueChange={({ floatValue }) => setValue(floatValue)}
        onFocus={event => {
          event.target.select();
        }}
      />
    </Container>
  );
};

export default DecimalInput;
