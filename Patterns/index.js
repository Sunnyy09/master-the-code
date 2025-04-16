let n = 5;
for (let i = 1; i <= n; i++) {
  let str = " ".repeat(n - i);
  for (let j = 1; j <= i; j++) {
    str += j + " ";
  }
  console.log(str);
}
