const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */


//  t(его надо найти) = (ln(MODERN_ACTIVITY/A)*HALF_LIFE_PERIOD)/ln(2);

function dateSample(activity) {
  if(typeof activity != "string" || !((+activity)>0) || (+activity) < 0 || Boolean(activity) === false || (+activity) >= 15  ) {
    console.log(false)
    return false
  } 
  console.log (Math.ceil(((Math.log(MODERN_ACTIVITY / (+activity))) * HALF_LIFE_PERIOD) / Math.log(2)));
  return Math.ceil(((Math.log(MODERN_ACTIVITY / (+activity))) * HALF_LIFE_PERIOD) / Math.log(2));
}

dateSample('0.15')


module.exports = {
  dateSample
};
