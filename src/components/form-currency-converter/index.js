import React from "react";
import { withFormik, Form } from "formik";
import DecimalInput from "components/decimal-input";
import SelectCountry from "components/select-country";
import ReverseCurrency from "components/reverse-currency";
import ButtonSubmit from "components/button-submit";
import {
  Container,
  BoxInput,
  BoxSelect,
  BoxButtonReverse,
  Label,
} from "./style";

const FormCurrencyConverter = () => {
  return (
    <Form>
      <Container>
        <BoxInput>
          <Label>Amount:</Label>
          <DecimalInput />
        </BoxInput>
        <BoxSelect>
          <Label>From Currenty:</Label>
          <SelectCountry />
        </BoxSelect>
        <BoxButtonReverse>
          <ReverseCurrency />
        </BoxButtonReverse>
        <BoxSelect>
          <Label>To Currenty:</Label>
          <SelectCountry />
        </BoxSelect>
        <ButtonSubmit />
      </Container>
    </Form>
  );
};

const enhanceWithFormik = withFormik({
  mapPropsToValues: () => ({
    amount: "",
    fromCurrenty: "",
    toCurrenty: "",
  }),
  handleSubmit: values => {},
});

export default enhanceWithFormik(FormCurrencyConverter);
