/*Write an anonymous function expression that stores a function in a variable called "laugh" and outputs the number of "ha"s that you pass in as an argument.

laugh(3);
Returns: hahaha!
*/


var laugh = function(num) {
  var funny = "";
  for (var i = 1; i <= num; i++) {
    funny += "ha";
  }
  return funny + "!";
}

console.log(laugh(10));
