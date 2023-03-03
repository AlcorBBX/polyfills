const expect = require("chai").expect;

const pollyfill = require("../src/myFlat");

describe("Testing myFlat pollyfill", () => {
  before(() => {
    pollyfill();
  });

  describe("Testing myFlat", () => {
    it("Check — wrong type", () => {
      function badFn() {
        Array.prototype.myFlat.call("asdfsd");
      }
      expect(badFn).to.throw(TypeError);
    });

    it("Check — without depth", () => {
      const arr = [1, 2, [3, 4, [9]]];
      expect(arr.myFlat()).to.deep.equal(arr.flat());
    });

    it("Check — depth 1", () => {
      const arr = [1, 2, [3, 4, [5, [6]], [9, 10]]];
      expect(arr.myFlat(1)).to.deep.equal(arr.flat(1));
    });

    it("Check — depth 2", () => {
      const arr = [1, 2, [3, 4, [5, 6]]];
      expect(arr.myFlat(2)).to.deep.equal(arr.flat(2));
    });

    it("Check — depth Infinity", () => {
      const arr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
      expect(arr.myFlat(Infinity)).to.deep.equal(arr.flat(Infinity));
    });
  });
});
