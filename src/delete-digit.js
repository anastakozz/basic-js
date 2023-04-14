const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  const numbers = [];
  let str =  n.toString();
for (i=0; i<str.length; i++){
  numbers.push(+str.replace(str[i],''));
}
  numbers.sort( (a, b) => b - a);
  return numbers[0];
}

deleteDigit(1590);

module.exports = {
  deleteDigit
};
