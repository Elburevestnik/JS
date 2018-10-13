"use strict"
var result;
function pow(x, n) {
	var y = 1;
	for (var i = 0; i < n; i++)
	{
		y *= x; 
	}
	return y;
}
var var1 = 3, var2 = 0;
var result = pow(var1, var2);
alert(var1 + '^' + var2 + ' = ' + result);
