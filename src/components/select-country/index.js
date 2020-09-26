import React, { useState } from "react";
import Select from "react-select";
import Icon from "components/icon";
import currencies from "./currencies";
import { Option, Label, Base } from "./style";

const formatOptionLabel = ({ value, label }) => {
  return (
    <Option>
      <Icon name={value} />
      <Label>
        <Base>{value}</Base> - {label}
      </Label>
    </Option>
  );
};

const SelectCountry = () => {
  const [selectedOption, setSelectedOption] = useState();
  return (
    <div>
      <Select
        formatOptionLabel={formatOptionLabel}
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={currencies}
      />
    </div>
  );
};

export default SelectCountry;
