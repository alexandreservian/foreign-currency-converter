import React from "react";
import {
  Container,
  Total,
  ConvertedResult,
  OtherResults,
  Results,
} from "./style";

const ConversionResult = () => {
  return (
    <Container>
      <Total>
        10 USD = <ConvertedResult>55</ConvertedResult> BRL
      </Total>
      <OtherResults>
        <Results>1 BRL = 0,180111 USD</Results>
        <Results>1 USD = 5,55213 BRL</Results>
      </OtherResults>
    </Container>
  );
};

export default ConversionResult;
