"use strict"
var N = 77; //number of elements
// standart algorithm
function fibonacci(n) {
	var F1 = 1, F2 = 0, F = 0;
	for (var i = 0; i < n; i++) {
		F = F1 + F2;		
		F1 = F2;
		F2 = F;
	}
	return F;
}

// Binet formule
function fibonacciBinet(n) {
	var FB = Math.pow((1 + Math.sqrt(5)) / 2, n) / Math.sqrt(5) ;
	return FB;
}
var resultF = fibonacci(N);
var resultFB = fibonacciBinet(N);
alert('Standart ' + resultF + ' and Formule Binet ' + resultFB);