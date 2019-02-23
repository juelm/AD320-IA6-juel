var inArray = process.argv;


var lastIndex = inArray.length;
var total = 0;


for(var i = 2; i < lastIndex; i++){
    
    var toAdd = +inArray[i];
    total = total + toAdd;
}

console.log(total);
