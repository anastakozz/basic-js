const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let cat = '^^';
  let catCount = 0;
  for (let block of matrix) {
    for( i= 0; i<block.length; i++){
      if(block[i] === cat) {
        catCount += 1;
      }
    }
  }

  // console.log(catCount);
  return catCount;
}

module.exports = {
  countCats
};
