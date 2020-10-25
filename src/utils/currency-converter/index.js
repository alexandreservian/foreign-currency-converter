import isNumber from "utils/is-number";
import generateTypeError from "utils/generate-type-error";

/**
 * Converts a foreign currency into another
 * @function
 * @param  {number} [money=0] Amount of Money
 * @param  {number} [rate=1] Value of a foreign currency
 * @return {number} Return converted amount
 */

const currencyConverter = (money = 0, rate = 1) => {
  return !isNumber(money)
    ? generateTypeError("The first parameter must be an number type")
    : !isNumber(rate)
    ? generateTypeError("The second parameter must be an number type")
    : money * rate;
};

export default currencyConverter;
