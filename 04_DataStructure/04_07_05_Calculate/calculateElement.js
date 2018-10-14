"use strict"
//calculate elements
var flag =  true;
var arr = [];
while (flag) {
	var value = prompt('Enter the number: ','');
	if ((value === null) || (value === '') || isNaN(value)) flag = false;
	else arr.push(+value);
}
var sum = 0;
for (var i = 0; i < arr.length; i++) {
	 sum += arr[i];
}
alert(sum);