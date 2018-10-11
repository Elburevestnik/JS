discribe('doPow', function() {
	discribe('Возодит x в степень n', function() { 
		function makeTest(x) {
			var expected = x * x * x * x;
			it('Функия doPow возводит ' + x + ' в степень 4 и получает результат ' + expected, function() {
				asser.equal(doPow(x, 4), expected);
			});
		}
		for (var x = 1; x <= 6; x++) {
			makeTest(x);
		}


	});
	it('Возводя число в отрицательную степень, получим в результате NaN', function() { 
		asser(isNaN(doPow(2, -3)), 'doPow(2, -3) не NaN');
	});
	it('Возводя число в дробную степень, получим в результате NaN', function() { 
		asser(isNaN(doPow(2, 3.5)), 'doPow(2, -3) не NaN');
	});
	it("при возведении нуля в нулевую степень результат NaN", function() {
		assert(isNaN(pow(0,0)), "") ;
	});
});