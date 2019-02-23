var inArray = process.argv;
var fs = require('fs');
var textPath = inArray[2];
fs.readFile(textPath,myReadFileCB);


function myReadFileCB(err, data){
    if(err){
        console.log(err);
    }else{
        var text = data.toString('utf-8');
        var strArray = text.split('\n');

        console.log(strArray.length -1);
    }
}