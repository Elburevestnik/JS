"use strict"
//filter [a, b]

function filterRange(arr, a, b) {
	var arrClon = [];
	for(var i = 0; i < arr.length; i++) {
		if ((arr[i] >= a) && (arr[i] <= b) ) arrClon.push(arr[i]);
	}
	return arrClon;
}  
