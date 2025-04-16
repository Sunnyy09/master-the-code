function quickSort(arr, start, end) {
  if (start < end) {
    const pivotIdx = partition(arr, start, end);
    // Rrcusively perform the quick sort for left and right half
    quickSort(arr, start, pivotIdx - 1); // left half
    quickSort(arr, pivotIdx + 1, end); // right half
  }
}

function partition(arr, start, end) {
  let idx = start - 1;
  let pivot = arr[end];
  for (let j = start; j < end; j++) {
    if (arr[j] <= pivot) {
      idx++;
      let temp = arr[idx];
      arr[idx] = arr[j];
      arr[j] = temp;
    }
  }
  idx++;
  let temp = arr[idx];
  arr[idx] = arr[end];
  arr[end] = temp;
  return idx; // pivot index
}

const nums = [12, 31, 35, 8, 32, 17];
quickSort(nums, 0, nums.length - 1);
console.log(nums);
