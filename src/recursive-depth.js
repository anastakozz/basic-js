const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let result = 1;
    let nPrev = [];
    let n = 1;
    const checker = (arr) => {
      for (i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
          n++;
          console.log(n);
          checker(arr[i]);
        } else {
          nPrev.push(n);
          n = 1;
        }
        
      }
    }
    checker(arr);
    nPrev.sort((a,b) => b - a);
    result = nPrev[0] > 1 ?  nPrev[0] : result;
    
    return result;
  }
  
}

// calculateDepth([1, 2, 3, 4, [1, 2, [1, 2, [[[]]]]], 5, [1, [[[[[[]]]]]]]]);



module.exports = {
  DepthCalculator
};
