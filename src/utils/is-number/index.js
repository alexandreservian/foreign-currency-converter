/**
 * Check variable is a number
 * @function
 * @param  {any} variable Variable to be tested
 * @return {boolean} Returns true if the value is a number
 */

const isNumber = variable => typeof variable === "number" && isFinite(variable);

export default isNumber;
