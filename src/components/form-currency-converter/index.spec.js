import React from "react";
import { render } from "@testing-library/react";
import FormCurrencyConverter from ".";

describe("Form Currency Converter", () => {
  it("should render component", () => {
    const { container } = createComponent();

    expect(container.firstChild).toBeInTheDocument();
  });
});

const createComponent = props => render(<FormCurrencyConverter {...props} />);
