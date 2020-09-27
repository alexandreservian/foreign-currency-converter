import React from "react";
import Icon from "components/icon";
import { Option, Label, Base } from "./style";

const FormatOptionLabel = ({ value, label }) => {
  return (
    <Option>
      <Icon name={value} />
      <Label>
        <Base>{value}</Base> - {label}
      </Label>
    </Option>
  );
};

export default FormatOptionLabel;
