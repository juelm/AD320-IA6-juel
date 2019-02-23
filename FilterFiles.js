var inArray = process.argv;
var fs = require('fs');
var path = require('path');
var textPath = inArray[2];
var extName = inArray[3];
fs.readdir(textPath,myReadDirCB);


function myReadDirCB(err, list){
    if(err){
        console.log(err);
    }else{
        var fileList = list;
        //var filtered = [];
        for(var i = 0; i < fileList.length; i++){
            if(path.extname(fileList[i]) == "." + extName){
                console.log(fileList[i]);
            }
        }

    }
}
