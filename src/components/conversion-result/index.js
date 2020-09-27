import React from "react";
import { Container, ConvertedResult, Results } from "./style";

const ConversionResult = () => {
  return (
    <Container>
      <Results>
        <ConvertedResult>10</ConvertedResult> USD ={" "}
        <ConvertedResult>55</ConvertedResult> BRL
      </Results>

      <Results>1 BRL = 0,180111 USD</Results>
      <Results>1 USD = 5,55213 BRL</Results>
    </Container>
  );
};

export default ConversionResult;
