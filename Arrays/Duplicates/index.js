const arr = [1, 2, 2, 4, 5, 6, 6];

// function find(array) {
//   for (let i = 0; i < array.length - 1; i++) {
//     for (let j = 1 + 1; j < array.length; j++) {
//       if (array[i] === array[j]) {
//         return array[i];
//       }
//     }
//   }
//   return -1;
// }

// Optimized approach
function findDuplicates(array) {
  let seen = new Set();
  let duplicates = new Set();

  array.forEach((num) => (seen.has(num) ? duplicates.add(num) : seen.add(num)));
  return duplicates.size ? [...duplicates] : -1;
  // The spread operator (...) converts the Set into an array.
}

/*
A Set in JavaScript is a built-in object that stores unique values of any type. It does not allow duplicate values, which makes it useful for tasks like finding duplicates, removing duplicates from an array, or tracking unique elements.
*/

// console.log(find(arr));
console.log(findDuplicates(arr));
