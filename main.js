'use strict';

/*

Refactor the following functions. Use higher-order functions rather than for-loops.

Choose from the following higher-order functions: map, filter, reduce, every, some

Run the command 'mocha' to test. Tests check for expected output and absence of for-loops.

*/

module.exports = {

  sum:   (array, base) => {
    var total = array.reduce(
      ( acc, cur ) => acc + cur, base);
      return total;
    },


    someObjsContainProp: (arr, prop) => {
      return arr.some(function(element, index, array) {
        return element.hasOwnProperty(prop);
      });
    },

    convertNameArrayToObject: (arr) => {
      return arr.map(function(element, index) {
        return {first: element[0], last:element[1]}
      })
    },

    objContainsProp: (arr, prop) => {
      return arr.every(function(element, index, arr) {
        return element.hasOwnProperty(prop);
      });
    },


    stringMatch: (arr, str) => {
      return arr.filter(function(element, index, arr) {
        return element.includes(str);
      });
    },
};
