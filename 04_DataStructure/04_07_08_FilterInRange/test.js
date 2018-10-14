describe("filterRange", function() {

  it("returns the filtered values", function() {

    let arr1 = [5, 3, 8, 1];

    let filtered = filterRange(arr1, 1, 4); 

    assert.deepEqual(filtered, [3, 1]);
  });

  it("doesn't change the array", function() {

    let arr2 = [5, 3, 8, 1];

    let filtered1 = filterRange(arr2, 1, 4); 

    assert.deepEqual(arr2, [5,3,8,1]);
  });

});
