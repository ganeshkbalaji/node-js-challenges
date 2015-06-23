var fs = require('fs')

fs.readFileSync('/path/to/file', function(err,data) {
  if (err) throw err;
  console.log(data);
});