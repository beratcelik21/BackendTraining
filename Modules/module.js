"use strict";
console.log("this line modules ");

//? Single Function
/*-------------------------------*
const testFunction = function () {
  console.log("this is function");
};

module.exports = testFunction;
/*-------------------------------*/

// module.exports = function () {
//     console.log("this is function");
//   };
/*
//?Multi Function
const testFunctionA = function () {
  console.log("this is function 1");
};

const testFunctionB = function () {
  console.log("this is function 2");
};

const testFunctionC = function () {
  console.log("this is function 3");
};

// Array
 module.exports =[testFunctionA, testFunctionB, testFunctionC]

//object

module.exports = {
  testFunctionA: testFunctionA,
  testFunctionB: testFunctionB,
  testFunctionC: testFunctionC,
  pi: 3.14
};

module.exports = {
  testFunctionA ,
  testFunctionB ,
  testFunctionC,
  pi: 3.14
};
*/
/*
module.exports.testFunctionA = function () {
  console.log("this is function 1");
};

module.exports.testFunctionB = function () {
  console.log("this is function 2");
};

module.exports.testFunctionC = function () {
  console.log("this is function 3");
};
module.exports.pi = 3.14
*/
module.exports={
  testFunctionA : function () {
    console.log("this is function 1");
  },
  
  testFunctionB : function () {
    console.log("this is function 2");
  },
  
  testFunctionC : function () {
    console.log("this is function 3");
  },
  pi : 3.14

}


