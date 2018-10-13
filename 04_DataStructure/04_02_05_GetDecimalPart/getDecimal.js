"use strict"
function getDecimal(n) {
  var intNum = n^0;
  var decPart = (n - intNum)*1e5;
  return Math.abs(Math.round(decPart)/1e5);
}
