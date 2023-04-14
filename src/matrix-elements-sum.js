const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *                        j
        i   0  1  2  3  

        *  [0, 1, 1, 2],  0
        *  [0, 5, 0, 0],  1
        *  [2, 0, 3, 3]   2
        * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let result = 0;
  
  for (i=0; i<matrix[0].length; i++){
    if(matrix[0][i] !== 0){
      result += matrix[0][i];
      for (j=1; j<matrix.length; j++){
        if(matrix[j][i] === 0){
          j++;
        } else {
          result += matrix[j][i];
        }
      }
    }
  }
    return(result);
}


getMatrixElementsSum([
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3],
])

module.exports = {
  getMatrixElementsSum
};
