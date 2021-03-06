import React from "react";
import Select from "react-select";
import { useField } from "formik";
import FormatOptionLabel from "./format-option-label";
import currencies from "./currencies";

const SelectCountry = ({
  name,
  "aria-label": ariaLabel,
  onChange,
  isLoading,
}) => {
  const [field, , helpers] = useField(name);
  const { value } = field;
  const { setValue } = helpers;

  return (
    <Select
      aria-label={ariaLabel}
      formatOptionLabel={FormatOptionLabel}
      options={currencies}
      value={value}
      onChange={value => {
        onChange(value);
        setValue(value);
      }}
      isLoading={isLoading}
    />
  );
};

SelectCountry.defaultProps = {
  onChange: () => {},
};

export default SelectCountry;
