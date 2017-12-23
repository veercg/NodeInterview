/*
  A JavaScript module which performs an insertion sort on a given array of numbers, ordering the elements from lowest to highest.
*/
module.exports = exports = function(input) {
// complete the function
  var arrLen = input.length;
  var sortedArr = input;
  for(var i=1; i<arrLen; i++){
    var j = i-1;
    while(j>=0 && sortedArr[i]<sortedArr[j]){
      var temp = sortedArr[j];
      sortedArr[j] = sortedArr[i];
      sortedArr[i] = temp;
      j = j - 1;
      i = i-1;
    }
    
  }
  return sortedArr;
};
