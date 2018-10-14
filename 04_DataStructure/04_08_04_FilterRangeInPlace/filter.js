"use strict"
// filter remove if into [a, b]

function filterRangeInPlace(arr, a, b) {

  for (var i = 0; i < arr.length; i++) {
	if ((arr[i] <= a) || (arr[i] >= b)) {
	  arr.splice(i, 1);

	}
  }
}