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
  throw new NotImplementedError('Not implemented');
  // if (Array.isArray(arr) === false) {
  //   return false;
  // }

  //   for (i=0; i<i.length; i++) {
  //     if (arr[i] === '--discard-next'){
  //       discardNext(i);
  //     } else if (arr[i] === '--discard-prev') {
  //       discardPrev(i);
  //     } else if (arr[i] === '--double-next') {
  //       doubleNext(i);
  //     } else if (arr[i] === '--double-prev') {
  //       doublePrev(i);
  //     }
  //   }

  // const discardNext = (index) => {
  //   const arr2 = arr.splice(index, 2);
  // }

  // const discardPrev = () => {
  //   return arr.splice(index - 1, 2);
  // }

  // const doubleNext = () => {
  //   return arr.splice(index, 1, arr[index + 1]);
  // }

  // const doublePrev = () => {
  //   return arr. splice(index, 1, index - 1 );
  // }

}

module.exports = {
  transform
};
