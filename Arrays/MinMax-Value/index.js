function findMinMax(arr) {
  let max = arr[0];
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }
  return { max, min };
}

const nums = [5, 6, 8, 1, 2, 3, 4];
const res = findMinMax(nums);
console.log(res);
