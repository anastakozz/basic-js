const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let check = email.split('');
  return (check.slice(check.lastIndexOf('@') + 1, check.length).join(""));
}
getEmailDomain("prettyandsimple@example.com");
module.exports = {
  getEmailDomain
};
