import React from "react";
import { Container, ConvertedResult, Results } from "./style";

const ConversionResult = () => {
  return (
    <Container>
      <Results>
        <ConvertedResult>1</ConvertedResult> BRL ={" "}
        <ConvertedResult>0,178013</ConvertedResult> USD
      </Results>
      <Results>1 USD = 5,61757 BRL</Results>
      <Results>1 BRL = 0,178013 USD</Results>
    </Container>
  );
};

export default ConversionResult;
