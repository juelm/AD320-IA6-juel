var inArray = process.argv;
var fs = require('fs');
var textPath = inArray[2];
var wordBuff = fs.readFileSync(textPath);
var text = wordBuff.toString('utf-8');

var strArray = text.split('\n');

console.log(strArray.length -1);


