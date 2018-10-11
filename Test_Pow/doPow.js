"use strict"
function pow(x, n) {
  var result = 1;
  if ((n > 0) && ((n ^ 0) === n)) {
	for (var i = 0; i < n; i++) {
	  result *= x;
	}
  } else if ((n == 0) && (x == 0)) {
	result = NaN;
  } else {
	result = NaN;
  }
  return result;
}