const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  console.log(arr);
    if (Array.isArray(arr) === false) {
      const e = new Error("'arr' parameter must be an instance of the Array!");
      throw e;
      // return false;
    }
    const result = [];
    for (i=0; i<arr.length; i++) {
      if (arr[i] === '--discard-next'){
        if (i !== arr.length - 1) {
          i++;
        i++;
        }
        
      } else if (arr[i] === '--discard-prev') {

        if (i !== 0){
          result.pop(); 
        }
        
      } else if (arr[i] === '--double-next') {
        if (i !== arr.length - 1) {
          result.push(arr[i+1]);
        }
        
      } else if (arr[i] === '--double-prev') {

        if( i !== 0) {
          result.push(arr[i-1]);
        } 
        
      } else {
        result.push(arr[i])
      }
    }
    console.log(result);
    return result;
    

  

}
transform(['--double-prev', 1, 2, 3]);

module.exports = {
  transform
};
