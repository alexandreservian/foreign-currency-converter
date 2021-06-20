import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FormCurrencyConverter from ".";

describe("Form Currency Converter", () => {
  it("should render component", () => {
    const { container } = createComponent();

    expect(container.firstChild).toBeInTheDocument();
  });

  it("should change values of select 'From Currenty' to 'To Currenty' when clicked in button 'ReverseCurrency'", async () => {
    createComponent();
    const buttonReverse = screen.getByRole("button", {
      name: "Flip Currencies",
    });
    const selectFromCurrenty = screen.getByRole("combobox", {
      name: "From Currenty",
    });
    const selectToCurrenty = screen.getByRole("combobox", {
      name: "To Currenty",
    });

    const currentValueFromCurrenty = selectFromCurrenty.value;
    const currentValueToCurrenty = selectToCurrenty.value;

    fireEvent.click(buttonReverse);

    expect(selectFromCurrenty.value).toEqual(currentValueToCurrenty);
    expect(selectToCurrenty.value).toEqual(currentValueFromCurrenty);
  });
});

const createComponent = props => render(<FormCurrencyConverter {...props} />);
