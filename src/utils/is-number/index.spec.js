import isNumber from "./index";

describe("Is Number", () => {
  it("should return true when variable is 7", () => {
    const current = isNumber(7);
    expect(current).toEqual(true);
  });

  it("should return true when variable is -15", () => {
    const current = isNumber(-15);
    expect(current).toEqual(true);
  });

  it("should return true when variable is 0.55151", () => {
    const current = isNumber(0.55151);
    expect(current).toEqual(true);
  });

  it("should return true when variable is -50.445", () => {
    const current = isNumber(-50.445);
    expect(current).toEqual(true);
  });

  it("should return true when variable is 5.555555555555556e+34", () => {
    const current = isNumber(5.555555555555556e34);
    expect(current).toEqual(true);
  });

  it("should return true when variable is -8.888888888888888e+27", () => {
    const current = isNumber(-8.888888888888888e27);
    expect(current).toEqual(true);
  });

  it("should return false when variable is empty", () => {
    const current = isNumber();
    expect(current).toEqual(false);
  });

  it("should return false when variable is NaN", () => {
    const current = isNumber(NaN);
    expect(current).toEqual(false);
  });

  it("should return false when variable is Infinity", () => {
    const current = isNumber(Infinity);
    expect(current).toEqual(false);
  });

  it("should return false when variable is '555555'", () => {
    const current = isNumber("55555");
    expect(current).toEqual(false);
  });

  it("should return false when variable is 'name'", () => {
    const current = isNumber("name");
    expect(current).toEqual(false);
  });
});
