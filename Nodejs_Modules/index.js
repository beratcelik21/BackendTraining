"use strict";
/! Node Modules!/;

console.log("hello FS15");

// require("../modules/module.js");
//Js uzantıya gerek yok.
require("../modules/module");

require("../modules/");

//? Single function call

const testSingleFunction = require("../modules/module");
// testSingleFunction()

//? Multi Function
/* 
//*array cagırma
const [test1, test2, test3]=require("../modules/module")
test1()
test2()
test3()
*/
//*obje cagırma
const {
  testFunctionA,
  testFunctionB,
  testFunctionC,
  pi,
} = require("../modules/module");
testFunctionA();
testFunctionB();
testFunctionC();
console.log(pi);
// require(':http');Http yı bulmak ıcın once proje ortamı sonra global ortama bakar .
// require('node:http');
require("dotenv").config();// .env icerigini process.env ye aktarır
console.log(process.env.port);
console.log(process.env.host);
