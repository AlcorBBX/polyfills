const expect = require("chai").expect;

const pollyfill = require("../src/myReduce");

describe("Testing myReduce pollyfill", () => {
  before(() => {
    pollyfill();
  });

  describe("Testing myReduce", () => {
    it("Check — wrong type", () => {
      function badFn() {
        Array.prototype.myReduce.call(true, (acc, value) => acc + value);
      }
      expect(badFn).to.throw(TypeError);
    });

    it("Check — no callback", () => {
      function badFn() {
        [1, 2, 3].myreduce();
      }
      expect(badFn).to.throw(TypeError);
    });

    it("Check — sum", () => {
      const arr = [1, 2, 3, 4];
      expect(arr.myReduce((acc, value) => acc + value)).to.equal(
        arr.reduce((acc, value) => acc + value)
      );
    });

    it("Check — string", () => {
      expect(
        Array.prototype.myReduce.call(
          "test",
          (acc, value) => {
            acc[value] = value + 1;
            return acc;
          },
          {}
        )
      ).to.deep.equal(
        Array.prototype.reduce.call(
          "test",
          (acc, value) => {
            acc[value] = value + 1;
            return acc;
          },
          {}
        )
      );
    });

    it("Check — properties", () => {
      expect(
        [1, 2, 3, 4].myReduce((acc, value, index, arr) => {
          acc.push([value, index, arr]);
          return acc;
        }, [])
      ).to.deep.equal(
        [1, 2, 3, 4].reduce((acc, value, index, arr) => {
          acc.push([value, index, arr]);
          return acc;
        }, [])
      );
    });
  });
});
