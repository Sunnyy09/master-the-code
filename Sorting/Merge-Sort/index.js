function mergeSort(arr, p, r) {
  if (p < r) {
    let q = Math.floor(p + (r - p) / 2);
    mergeSort(arr, p, q); // left half
    mergeSort(arr, q + 1, r); // right half
    merge(arr, p, q, r);
  }
}

function merge(arr, p, q, r) {
  let temp = [];
  let i = p;
  let j = q + 1;

  while (i <= q && j <= r) {
    if (arr[i] <= arr[j]) {
      temp.push(arr[i]);
      i++;
    } else {
      temp.push(arr[j]);
      j++;
    }
  }

  while (i <= q) {
    temp.push(arr[i]);
    i++;
  }
  while (j <= r) {
    temp.push(arr[j]);
    j++;
  }

  // Copy back sorted elements into the original array
  for (let k = 0; k < temp.length; k++) {
    arr[p + k] = temp[k];
  }
}

const nums = [12, 31, 35, 8, 32, 17];
mergeSort(nums, 0, nums.length - 1);
console.log(nums);
