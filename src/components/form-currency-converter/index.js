import React from "react";
import NumberFormat from "react-number-format";
import SelectCountry from "components/select-country";
import { withFormik, Form } from "formik";

const FormCurrencyConverter = () => {
  return (
    <Form>
      <NumberFormat
        thousandSeparator={"."}
        decimalSeparator={","}
        decimalScale={2}
      />
      <SelectCountry />
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
