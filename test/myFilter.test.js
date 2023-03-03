const expect = require("chai").expect;

const pollyfill = require("../src/myFilter");

describe("Testing myFlat pollyfill", () => {
  before(() => {
    pollyfill();
  });
});
