"use strict"
var flag = true;
while (flag) {
	var num1 = prompt('Enter the first number ','');

	var num2 = prompt('Enter the second number ','');
	function isNumeric(n)
	{
		return !isNaN(parseFloat(n)) && isFinite(n);	
	}
	num1 = parseFloat(num1);
	num2 = parseFloat(num2);
	if ((isNumeric(num1)) && (isNumeric(num2))) {
		var sum = num1 + num2;
		alert('Sum of entered numbers: ' + sum);
		flag = false;
	} else {
		alert('Enter correct numbers!');
	}
}