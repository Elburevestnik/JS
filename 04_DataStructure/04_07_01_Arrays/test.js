describe("find", function() {

  describe("возвращает позицию, на которой найден элемент", function() {
    it("в массиве [1,2,3] находит 1 на позиции 0", function() {
      assert.equal(find([1, 2, 3], 1), 0);
    });
    it("в массиве [1,2,3] находит 2 на позиции 1", function() {
      assert.equal(find([1, 2, 3], 2), 1);
    });
    it("в массиве [1,2,3] находит 3 на позиции 2", function() {
      assert.equal(find([1, 2, 3], 3), 2);
    });
  });

  it("если элемент не найден, возвращает -1", function() {
    assert.equal(find([1, 2, 3], 0), -1);
  });

  it("отличает false или null от 0", function() {
    assert.equal(find([false, true, null], 0), -1);
  });

  it("отличает 1 от true", function() {
    assert.equal(find([1, 2, 3], true), -1);
  });
});
describe("filterRange", function() {

  it("returns the filtered values", function() {

    let arr = [5, 3, 8, 1];

    let filtered = filterRange(arr, 1, 4); 

    assert.deepEqual(filtered, [3, 1]);
  });

  it("doesn't change the array", function() {

    let arr = [5, 3, 8, 1];

    let filtered = filterRange(arr, 1, 4); 

    assert.deepEqual(arr, [5,3,8,1]);
  });

});
describe("filterRangeInPlace", function() {

  it("меняет массив, оставляя только значения из диапазона", function() {
    var arr = [5, 3, 8, 1];
    filterRangeInPlace(arr, 1, 4);
    assert.deepEqual(arr, [3, 1]);
  });

});