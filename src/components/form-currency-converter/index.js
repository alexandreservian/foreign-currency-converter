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

const handleReverseCurrency = (values, setValues) => () => {
  const { amount, fromCurrenty, toCurrenty } = values;
  return setValues({
    amount,
    fromCurrenty: { ...toCurrenty },
    toCurrenty: { ...fromCurrenty },
  });
};

const FormCurrencyConverter = ({
  handleChangeFromCurrenty,
  isLoadingFromCurrenty,
  values,
  setValues,
}) => {
  return (
    <Form>
      <Container>
        <BoxInput>
          <Label>Amount:</Label>
          <DecimalInput name="amount" />
        </BoxInput>
        <BoxSelect>
          <Label>From Currenty:</Label>
          <SelectCountry
            name="fromCurrenty"
            aria-label="From Currenty"
            isLoading={isLoadingFromCurrenty}
            onChange={({ value }) => handleChangeFromCurrenty(value)}
          />
        </BoxSelect>
        <BoxButtonReverse>
          <ReverseCurrency onClick={handleReverseCurrency(values, setValues)} />
        </BoxButtonReverse>
        <BoxSelect>
          <Label>To Currenty:</Label>
          <SelectCountry name="toCurrenty" aria-label="To Currenty" />
        </BoxSelect>
        <ButtonSubmit />
      </Container>
    </Form>
  );
};

const enhanceWithFormik = withFormik({
  mapPropsToValues: () => ({
    amount: "",
    fromCurrenty: {
      value: "BRL",
      label: "Brazilian real",
    },
    toCurrenty: {
      value: "USD",
      label: "US dollar",
    },
  }),
  handleSubmit: (values, { props: { handleOnSubmit } }) =>
    handleOnSubmit(values),
});

export default enhanceWithFormik(FormCurrencyConverter);
