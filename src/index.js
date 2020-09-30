
exports.min = function min (array = []) {
  let minValue = 0;

  if (array.length) minValue = array[0];

  for (let item of array) {
    if (item < minValue) {
      minValue = item;
    }
  }
  return minValue;
}

exports.max = function max (array = []) {
  let maxValue = 0;

  if (array.length) maxValue = array[0];

  for (let item of array) {
    if (item > maxValue) {
      maxValue = item;
    }
  }
  return maxValue;
}

exports.avg = function avg (array) {
  return 0;
}
