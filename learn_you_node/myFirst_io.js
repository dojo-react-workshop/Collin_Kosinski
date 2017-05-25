var fs = require('fs');

filePath = (process.argv[2]);

file = fs.readFileSync(filePath);

lines = file.toString();

console.log(lines.split('\n').length -1);

