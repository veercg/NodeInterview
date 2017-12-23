/*
  A JavaScript module which performs a Durstenfeld shuffle on a given array.
*/
module.exports = exports = function(input) {
// complete the function
  var arr  = input;
  var newArr = [];
  while(arr.length>0){
    var arrLen = arr.length;
    var randomIndex = Math.floor((Math.random() * arrLen) + 1);
    newArr.push(arr[randomIndex]);
    arr.splice(randomIndex,1);
    
  }
  return newArr;
}
