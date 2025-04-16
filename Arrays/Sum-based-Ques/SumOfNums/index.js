function sumsOfNums(n) {
  let count = 1;
  let sum = 0;
  while (count < n) {
    sum = sum + count;
    count++;
  }
  return sum;
}

const res = sumsOfNums(5);
console.log(res);
