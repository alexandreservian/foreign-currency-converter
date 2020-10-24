import generateTypeError from "./index";

describe("Generate Type Error", () => {
  it("should return typeError", () => {
    expect(() => generateTypeError()).toThrow();
  });

  it("should return typeError with message=The param hero wasn't defined", () => {
    expect(() => generateTypeError("The param hero wasn't defined")).toThrow(
      "The param hero wasn't defined"
    );
  });
});
