var inArray = process.argv;
var http = require('http');
var webAddress = inArray[2];

http.get(webAddress, httpGetCB);


function httpGetCB(response){

    response.setEncoding('utf8');
    response.on("data", function(data){
        console.log(data);
    });

} 

