module.exports = function () {
  // чтобы не было ошибок, если в какой-то версии будет полифил такой
  if (!Array.prototype.myReduce) {
    Array.prototype.myReduce = function (callback, initValue) {
      if (!(this instanceof Array || this instanceof String)) {
        throw TypeError(`Value have wrong type`);
      }

      if (typeof callback !== "function") {
        throw new TypeError(
          `Array.prototype.myReduce ${callback} is not a function`
        );
      }

      let acc = arguments.length >= 2 ? initValue : this[0];
      let countStart = arguments.length >= 2 ? 0 : 1;

      for (let i = countStart; i < this.length; i++) {
        acc = callback(acc, this[i], i, this);
      }

      return acc;
    };
  }
};
