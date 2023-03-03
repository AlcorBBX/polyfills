module.exports = function () {
  // чтобы не было ошибок, если в какой-то версии будет полифил такой
  if (!Array.prototype.myFlat) {
    Array.prototype.myFlat = function (depth = 1) {
      if (!(this instanceof Array)) {
        throw TypeError(`Value have wrong type`);
      }

      if (isNaN(depth) || depth <= 0) {
        return this;
      }

      function flatten(arr, depth) {
        let result = [];

        for (let i = 0; i < arr.length; i++) {
          if (Array.isArray(arr[i]) && depth > 0) {
            result.push(...flatten(arr[i], depth - 1));
          } else {
            result.push(arr[i]);
          }
        }

        return result;
      }

      return flatten(this, depth);
    };
  }
};
