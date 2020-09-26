import React from "react";
import { ReactComponent as Svg } from "./reverse-currency.svg";
import Container from "./style";

const ReverseCurrency = () => {
  return (
    <Container type="button">
      <Svg />
    </Container>
  );
};

export default ReverseCurrency;
