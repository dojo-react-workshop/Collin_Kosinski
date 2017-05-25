
var fs = require('fs');
var myMathService = require('./math.js');



var add = myMathService.add(2,3);
var multiply = myMathService.multiply(2,3);
var square = myMathService.square(2);
var random = myMathService.random(2, 9);

console.log(add, multiply, square, random);
