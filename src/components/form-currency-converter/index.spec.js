import React from "react";
import { waitFor, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

    userEvent.click(buttonReverse);

    expect(selectFromCurrenty.value).toEqual(currentValueToCurrenty);
    expect(selectToCurrenty.value).toEqual(currentValueFromCurrenty);
  });

  it("should call event handleChangeFromCurrenty when fromCurrenty receive event onChange", () => {
    const handleChangeFromCurrenty = jest.fn();
    createComponent({ handleChangeFromCurrenty });
    const selectFromCurrenty = screen.getByRole("combobox", {
      name: "From Currenty",
    });
    userEvent.selectOptions(selectFromCurrenty, "JPY");
    expect(handleChangeFromCurrenty).toHaveBeenCalled();
    expect(handleChangeFromCurrenty).toHaveBeenCalledWith("JPY");
  });

  it("should call event handleOnSubmit when form receive event onSubmit", async () => {
    const handleOnSubmit = jest.fn();
    createComponent({ handleOnSubmit, handleChangeFromCurrenty: () => {} });
    const selectFromCurrenty = screen.getByRole("combobox", {
      name: "From Currenty",
    });
    const selectToCurrenty = screen.getByRole("combobox", {
      name: "To Currenty",
    });
    const input = screen.getByRole("textbox", {
      name: "Decimal Input",
    });
    const button = screen.getByRole("button", {
      name: "To Converter",
    });
    userEvent.type(input, "33");
    userEvent.selectOptions(selectFromCurrenty, "JPY");
    userEvent.selectOptions(selectToCurrenty, "BRL");
    userEvent.click(button);
    await waitFor(() => {
      expect(handleOnSubmit).toHaveBeenCalled();
      expect(handleOnSubmit).toHaveBeenCalledWith({
        amount: 33,
        fromCurrenty: { value: "JPY", label: "Japanese yen" },
        toCurrenty: { value: "BRL", label: "Brazilian real" },
      });
    });
  });
});

const createComponent = props => render(<FormCurrencyConverter {...props} />);
