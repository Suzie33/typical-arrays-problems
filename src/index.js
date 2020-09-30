
exports.min = function min (array = []) {
  let minValue = 0;

  for (let item of array) {
    if (item < minValue) {
      minValue = item;
    }
  }
  return minValue;
}

exports.max = function max (array) {
  return 0;
}

exports.avg = function avg (array) {
  return 0;
}
