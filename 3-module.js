//Modules - encapsulated code
// every file is a module

// to get the module from other file
const names = require('./4-names.js')
const sayHi = require('./5-func.js')
const data = require('./6-alternative-flavor.js')
// console.log(names);

// console.log(data);

// sayHi("Susan");
// sayHi(names.jhon);
// sayHi(names.peter);

require('./7-addFunc.js')