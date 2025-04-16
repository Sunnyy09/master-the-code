function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}

let arr1 = [-5, 2, 10, 4, 6];
let arr2 = [-5, 2, 10, 4];

console.log(linearSearch(arr1, 10));
console.log(linearSearch(arr2, 4));
