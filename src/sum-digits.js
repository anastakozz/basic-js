const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(num) {
  let arr = num.toString().split("").map( item => +item);
  let result = arr.reduce((sum, current) => sum + current, 0);
  // console.log(arr);
  // console.log(`${result}`.length);
  // console.log(typeof result)
  return `${result}`.length === 1 ? result : getSumOfDigits(result);
 
  
}
getSumOfDigits(567)

module.exports = {
  getSumOfDigits
};
