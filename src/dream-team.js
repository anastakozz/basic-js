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
  // console.log(names[0]);
  

 const teamBuilder = () => {
  const names2 = names.map(element => element.split("").filter(letter => letter !== " ").join());
  return names2.map(item => item[0].toUpperCase()).sort().join("");
 }

 console.log(names.length === 0 ? false : teamBuilder()); 

  return names.length === 0 ? false : teamBuilder();
}

createDreamTeam([
  '   William Alston ',
  ' Paul Benacerraf',
  '  Ross Cameron',
  '       Gilles Deleuze',
  '  Arda Denkel ',
  '  Michael Devitt',
  '  Kit Fine',
  ' Nelson Goodman',
  'David Kolb',
  '   Saul Kripke',
  '  Trenton Merricks',
  '  Jay Rosenberg',
])

module.exports = {
  createDreamTeam
};
