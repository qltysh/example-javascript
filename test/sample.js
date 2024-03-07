var equal  = require("assert").equal;
var Sample = require("../src/sample");

describe("Sample", function() {
  var subject = new Sample;

  describe("add", function() {
    it("adds two numbers", function() {
      equal(subject.add(1, 2), 3);
    });
  });

  describe("subtract", function() {
    it("subtract two numbers", function() {
      equal(subject.subtract(5, 2), 3);
    });
  });
});
