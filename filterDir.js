
var fs = require('fs');
var path = require('path');


module.exports = filterList;

function filterList(dirPath, extName, callback){
    return fs.readdir(dirPath, function(err, list){
        if(err){
            return callback(err);
        }else{

        output = [];
        for(i = 0; i < list.length; i++){
            if(path.extname(list[i]) == "." + extName){
                //outString = outString + list[i] + "\n";
                output.push(list[i]);
            }
        }
        return callback(null, output);

        }
    });
        
};
    

