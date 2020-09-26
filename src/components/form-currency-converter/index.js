import React from "react";
import { withFormik, Form } from "formik";
import NumberFormat from "react-number-format";
import SelectCountry from "components/select-country";
import ReverseCurrency from "components/reverse-currency";
import ButtonSubmit from "components/button-submit";

const FormCurrencyConverter = () => {
  return (
    <Form>
      <NumberFormat
        thousandSeparator={"."}
        decimalSeparator={","}
        decimalScale={2}
      />
      <SelectCountry />
      <ReverseCurrency />
      <SelectCountry />
      <ButtonSubmit />
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
