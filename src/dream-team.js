const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {
  if (Array.isArray(arr) === false) {
    return false;
  }


  let names = arr.filter(item => typeof item === 'string');

 const teamBuilder = () => {
//   const names2 = names.map(element => {
//    element.split().filter(letter => letter !== " ").join()
//   });
  return names.map(item => item[0].toUpperCase()).sort().join("");
 }

  return names.length === 0 ? false : teamBuilder();
}

module.exports = {
  createDreamTeam
};
