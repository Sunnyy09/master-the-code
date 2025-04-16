function insertionSort(arr, n) {
  for (let i = 1; i < n; i++) {
    let curr = arr[i];
    let prev = i - 1;
    while (prev >= 0 && arr[prev] > curr) {
      arr[prev + 1] = arr[prev];
      prev--;
    }
    arr[prev + 1] = curr;
  }
}

const nums = [3, 5, 6, 1, 2, 4];
insertionSort(nums, nums.length);
console.log(nums);

function dryRun(arr, n) {
  for (let i = 1; i < n; i++) {
    let curr = arr[i];
    let prev = i - 1;
    while (prev >= 0 && arr[prev] < curr) {
      arr[prev + 1] = arr[prev];
      prev--;
    }
    arr[prev + 1] = curr;
  }
}

dryRun(nums, nums.length);
console.log(nums);
