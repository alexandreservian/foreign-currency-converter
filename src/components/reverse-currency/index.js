import React from "react";
import { ReactComponent as Svg } from "./reverse-currency.svg";
import Container from "./style";

const ReverseCurrency = ({ onClick }) => {
  return (
    <Container type="button" onClick={onClick}>
      <Svg />
    </Container>
  );
};

export default ReverseCurrency;
