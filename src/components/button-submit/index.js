import React from "react";
import { ReactComponent as Svg } from "./submit.svg";
import Container from "./style";

const ButtonSubmit = () => {
  return (
    <Container type="button">
      <Svg />
    </Container>
  );
};

export default ButtonSubmit;
