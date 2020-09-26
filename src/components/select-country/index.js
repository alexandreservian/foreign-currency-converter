import React, { useState } from "react";
import Select from "react-select";
import Icon from "components/icon";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const SelectCountry = () => {
  const [selectedOption, setSelectedOption] = useState();
  return (
    <div>
      <Icon name="thai-baht" />
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
    </div>
  );
};

export default SelectCountry;
