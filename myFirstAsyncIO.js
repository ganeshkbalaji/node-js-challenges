var fs = require('fs')

var readlines = process.argv[2]

var dataparse = fs.readFile(readlines, function callback(err,data){
  console.log(data.toString().split('\n').length-1);
})