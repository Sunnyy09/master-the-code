// const res = arr.reverse();

function reverseArray(array) {
  let start = 0;
  let end = array.length - 1;

  while (start < end) {
    let temp = array[start];
    array[start] = array[end];
    array[end] = temp;

    // Move pointers
    start++;
    end--;
  }
  return array;
}

const arr = [1, 2, 3, 4, 5];
console.log(reverseArray(arr));
