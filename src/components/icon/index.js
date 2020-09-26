import React from "react";
import sprite from "./sprite.svg";
import Container from "./style";

const Icon = ({ name }) => {
  return (
    <Container>
      <svg viewBox="0 0 16 16">
        <use href={`${sprite}#${name}`} />
      </svg>
    </Container>
  );
};

export default Icon;
