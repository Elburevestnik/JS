"use strict"

// Empty array
function isEmpty(obj) {
	var count = 0;
	for (var elements in obj) {
		count++;
	}
	if (count == 0) return true;
	else return false;
	
}

// Money
var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};
var empty = isEmpty(salaries);
var sumMoney = 0;
if (!empty) {
	for (var money in salaries) {
		sumMoney += salaries[money];	
	}
}
alert('Sum of money ' + sumMoney);

// option x 2
function multiplyNumeric(obj) {
	for (var num in obj) {
		if (isNumeric(obj[num])) obj[num] = obj[num] * 2; 
	}
}
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}