const arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const arr2 = [1, 2, 4, 5, 9, 12, 20];

// Iterative Code for binary search
function binary(array, target) {
  let start = 0; // start should be initialized as the index, not the value
  let end = array.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (target > array[mid]) {
      start = mid + 1;
    } else if (target < array[mid]) {
      end = mid - 1;
    } else {
      return mid; // Target found, return index
    }
  }
  return -1; // -1 indicating the target element does not exist
}

const res1 = binary(arr1, 6);
const res2 = binary(arr2, 12);
console.log(res1, res2);
