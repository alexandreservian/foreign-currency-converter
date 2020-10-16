import currencyConverter from "./";

describe("Currency Converter", () => {
  it("should return 12 when params are 2 and 6", () => {
    const current = currencyConverter();
    const expected = 12;

    expect(current).toEqual(expected);
  });
});
