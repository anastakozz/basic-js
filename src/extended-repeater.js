const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
let repeatTimes = options.repeatTimes > 1 ? options.repeatTimes : 1;
let separator = "separator" in options ? options.separator : '+';
let addition = "addition" in options ? options.addition : '';
let additionRepeatTimes = options.additionRepeatTimes > 1 ? options.additionRepeatTimes : 1;
let additionSeparator = "additionSeparator" in  options ? options.additionSeparator : '|';




let part1 = (addition + additionSeparator).repeat(additionRepeatTimes);
let partToRepeat = str + part1.slice(0, part1.length - additionSeparator.length);
console.log(partToRepeat);
let partAfterRepeat = (partToRepeat + separator).repeat(repeatTimes);
console.log(partAfterRepeat.slice(0, partAfterRepeat.length - separator.length))
return partAfterRepeat.slice(0, partAfterRepeat.length - separator.length);
}

repeater('STRING', { repeatTimes: 3, separator: 's', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })

module.exports = {
  repeater
};
