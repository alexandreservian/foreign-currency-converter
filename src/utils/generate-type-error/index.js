/**
 * Dispara um TypeError sua propria mensagem definida
 * @function
 * @param  {string} [message=""] Mensagem de erro a ser exibida
 * @return {Error} Retorna uma mensagem de TypeError
 */
const generateTypeError = (message = "") => {
  throw new TypeError(message);
};

export default generateTypeError;
