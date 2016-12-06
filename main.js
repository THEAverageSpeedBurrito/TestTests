'use strict';

module.exports = {

  greeting: (name) => {
    if(typeof name !== 'string'){
      return 'invalid';
    }
    return 'Hello ' + name;
  },

  reduce: (array) => {
    let sum = 0;
    if(typeof(array) !== 'object'){
      return 'invalid type';
    }
    for(let i = 0; i < array.length; i++) {
      if(typeof(array[i]) !== 'number'){
        return 'invalid array';
      }
      sum += array[i];
    }
    return sum;
  }

};
