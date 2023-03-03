const expect = require("chai").expect;

const pollyfill = require("../src/myFilter");

describe("Testing myFilter pollyfill", () => {
  before(() => {
    pollyfill();
  });


  describe("Testing myFilter", () => {
    it("Check — wrong type", () => {
      function badFn() {
        Array.prototype.myFilter.call(true, (value) => value);
      }
      expect(badFn).to.throw(TypeError);
    });

    it("Check — no callback", () => {
      function badFn() {
        [1, 2, 3].myFilter();
      }
      expect(badFn).to.throw(TypeError);
    });

    it("Check — simple loop", () => {
      expect([1, 2, 3, 4].filter((a, b) => a - b)).to.deep.equal(
        [1, 2, 3, 4].filter((a, b) => a - b)
      );
    });

    it("Check — string", () => {
      expect(
        Array.prototype.myFilter.call(["test", "air"], (a, b) => a + b)
      ).to.deep.equal(Array.prototype.filter.call(["test", "air"], (a,b) => a + b));
    });

    // it("Check — properties", () => {
    //   const arr = [1, 2, 3, 4];
    //   expect(arr.myFilter((item, index, arr) => [item, index, arr])).to.deep.equal(
    //     arr.filter((item, index, arr) => [item, index, arr])
    //   );
    // });
  });
});
