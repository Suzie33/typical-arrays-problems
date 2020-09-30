
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

exports.avg = function avg (array = [0]) {
  let sum = 0;
  let avgValue = 0;

  for (let item of array) {
    sum += item;
  }

  if (array.length) avgValue = sum / array.length;
  return avgValue;
}
