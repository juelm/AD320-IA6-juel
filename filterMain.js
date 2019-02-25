var inArray = process.argv;
var fs = require('fs');
var path = require('path');
var textPath = inArray[2];
var extName = inArray[3];
//fs.readdir(textPath,myReadDirCB);

var filDir = require('./filterDir');

filDir(textPath, extName, myReadDirCB);

function myReadDirCB(err, data){
    if(err){
        throw err;
    }else{
        for(i = 0; i < data.length; i ++){
            console.log(data[i]);
        }

    }
} 