module.exports = function () {
  // чтобы не было ошибок, если в какой-то версии будет полифил такой
  if (!Array.prototype.myMap) {
    Array.prototype.myMap = function (callback) {
      if (!(this instanceof Array || this instanceof String)) {
        throw TypeError(`Value have wrong type`);
      }

      if (typeof callback !== "function") {
        throw new TypeError(
          `Array.prototype.myMap ${callback} is not a function`
        );
      }

      const result = [];
      for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
      }

      return result;
    };
  }
};
