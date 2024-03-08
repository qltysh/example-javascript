var Sample = require("../src/sample");
var subject = new Sample;

test('adds 1 + 2 to equal 3', () => {
  expect(subject.add(1, 2)).toBe(3);
});

test('subtract 5 - 1 to equal 4', () => {
  expect(subject.subtract(5, 1)).toBe(4);
});
