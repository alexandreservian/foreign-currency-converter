/**
 * Fires a TypeError your own defined message
 * @function
 * @param  {string} [message=""] Error message to be displayed
 * @return {Error} Returns a TypeError message
 */
const generateTypeError = (message = "") => {
  throw new TypeError(message);
};

export default generateTypeError;
