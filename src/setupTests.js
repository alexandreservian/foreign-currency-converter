// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import React from "react";
import "@testing-library/jest-dom/extend-expect";

jest.mock(
  "react-select",
  () => ({ "aria-label": ariaLabel, options, value, onChange }) => {
    const { value: currentValueSelect } = value;
    function handleChange(event) {
      const option = options.find(
        option => option.value === event.currentTarget.value
      );
      onChange(option);
    }
    return (
      <select
        aria-label={ariaLabel}
        value={currentValueSelect}
        onChange={handleChange}
      >
        {options.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    );
  }
);
