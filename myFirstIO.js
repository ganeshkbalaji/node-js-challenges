
var fs = require('fs');

var readlines = process.argv[2];

var data = fs.readFileSync(readlines)
// console.log(data);
console.log(data.toString().split('\n').length-1);