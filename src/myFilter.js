module.exports = function () {
  // чтобы не было ошибок, если в какой-то версии будет полифил такой
  if (!Array.prototype.myFilter) {
    Array.prototype.myFilter = function (callback, initValue) {
      if (!(this instanceof Array || this instanceof String)) {
        throw TypeError(`Value have wrong type`);
      }

      if (typeof callback !== "function") {
        throw new TypeError(
          `Array.prototype.myFilter ${callback} is not a function`
        );
      }

      let result = []
      for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)) {
          result.push(this[i]);
        }
      }

      return result;
    };
  }
};
