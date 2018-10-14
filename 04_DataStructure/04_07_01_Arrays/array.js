"use strict"
// calculate elements
var flag =  true;
vat arr = [];
while (flag) {
	var value = prompt('Enter the number: ','');
	if ((value === null) || (value === '') || isNaN(value)) flag = false;
	else arr.push =	(+value);
}
var sum = 0;
for (var i = 0; i < arr.length; i++) {
	 sum += sum[i];
}

alert(sum);

// find element

function find(arr, value) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === value) return i;
		
	}
	return -1;
}

//filter [a, b]

function filterRange(arr, a, b) {
	arrClon = [];
	for(var i = 0; i < arr.length; i++) {
		if ((arr[i] >= a) && (arr[i] <= b) ) arrClon.push(arr[i]);
	}
	return arrClon;
}  
// filter remove if into [a, b]

function filterRangeInPlace(arr, a, b) {

  for (var i = 0; i < arr.length; i++) {
	if ((arr[i] <= a) || (arr[i] >= b)) {
	  arr.splice(i, 1);

	}
  }
}