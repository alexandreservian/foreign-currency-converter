import currencyConverter from "./";

describe("Currency Converter", () => {
  it("should return 12 when params are 2 and 6", () => {
    const current = currencyConverter(2, 6);
    const expected = 12;

    expect(current).toEqual(expected);
  });

  it("should return 21 when params are 3 and 7", () => {
    const current = currencyConverter(3, 7);
    const expected = 21;

    expect(current).toEqual(expected);
  });

  it("should return 0 when params are empty", () => {
    const current = currencyConverter();
    const expected = 0;

    expect(current).toEqual(expected);
  });

  it("should return 5 when first param is 5 and second param is empty", () => {
    const current = currencyConverter(5);
    const expected = 5;

    expect(current).toEqual(expected);
  });

  it("should return TypeError when first variable doesn't number type", () => {
    expect(() => currencyConverter("5")).toThrow(
      "The first parameter must be an number type"
    );
  });

  it("should return TypeError when second variable doesn't number type", () => {
    expect(() => currencyConverter(5, "7")).toThrow(
      "The second parameter must be an number type"
    );
  });
});
