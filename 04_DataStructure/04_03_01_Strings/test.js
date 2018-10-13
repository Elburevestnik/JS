describe("checkSpam", function() {
  it('finds spam in "buy ViAgRA now"', function() {
    assert.isTrue(checkSpam('buy ViAgRA now'));
  });

  it('finds spam in "free xxxxx"', function() {
    assert.isTrue(checkSpam('free xxxxx'));
  });

  it('no spam in "innocent rabbit"', function() {
    assert.isFalse(checkSpam('innocent rabbit'));
  });
});
describe("truncate", function() {
  it("truncate the long string to the given lenth (including the ellipsis)", function() {
    assert.equal(
      truncate("What I'd like to tell you:", 22),
      "What I'd like to te..."
    );
  });

  it("doesn't change short strings", function() {
    assert.equal(
      truncate("Hi everyone!", 20),
      "Hi everyone!"
    );
  });

});
describe("extractCurrencyValue", function() {

  it("for the string $120 returns the number 120", function() {
    assert.strictEqual(extractCurrencyValue('$120'), 120);
  });


});