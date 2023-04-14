const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let n = 1;
  let result = '';
  for (i=0; i<str.length; i++) {
    if (str[i] === str[i+1]) {
      n += 1;
    } else {
      
      result = n===1 ? result + str[i] : result + `${n}` + str[i];
      n = 1;
    }
  }

  console.log(result);
  return result;
}

encodeLine("gaaabbcccc");

module.exports = {
  encodeLine
};
