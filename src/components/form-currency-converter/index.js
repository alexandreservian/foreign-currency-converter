import React from "react";
import { withFormik, Form } from "formik";

const FormCurrencyConverter = () => {
  return <Form></Form>;
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
