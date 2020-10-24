/**
 * Verifica variavel é um número
 * @function
 * @param  {any} variable Variavel a ser testada
 * @return {boolean} Retorna verdadeiro se o valor for um número
 */

const isNumber = variable => typeof variable === "number" && isFinite(variable);

export default isNumber;
