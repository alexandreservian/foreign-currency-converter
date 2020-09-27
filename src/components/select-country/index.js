import React from "react";
import Select from "react-select";
import { useField } from "formik";
import FormatOptionLabel from "./format-option-label";
import currencies from "./currencies";

const SelectCountry = ({ name }) => {
  const [field, , helpers] = useField(name);
  const { value } = field;
  const { setValue } = helpers;

  return (
    <Select
      formatOptionLabel={FormatOptionLabel}
      options={currencies}
      value={value}
      onChange={value => setValue(value)}
    />
  );
};

export default SelectCountry;
