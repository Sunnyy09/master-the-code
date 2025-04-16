function selectionSort(arr, n) {
  for (let i = 0; i < n - 1; i++) {
    let smallestIndex = i; // unsorted part starting index
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[smallestIndex]) {
        smallestIndex = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[smallestIndex];
    arr[smallestIndex] = temp;
  }
}

const nums = [5, 6, 1, 2, 4, 8];
selectionSort(nums, nums.length);
console.log(nums);

function dryRun(arr, n) {
  for (let i = 0; i < n - 1; i++) {
    let greaterIdx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] > arr[greaterIdx]) {
        greaterIdx = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[greaterIdx];
    arr[greaterIdx] = temp;
  }
}

dryRun(nums, nums.length);
console.log(nums);
