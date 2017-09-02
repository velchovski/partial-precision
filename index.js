const pEq = require('./lib');

var int1 = 100;
var int2 = 200;

var result = pEq.integer(int1, int2);
console.log(`${int1} ~= ${int2} = ${result}`);