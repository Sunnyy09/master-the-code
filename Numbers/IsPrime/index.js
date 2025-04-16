function isPrime(num) {
  if (num <= 1) return false;

  // Check divisibility from 2 up to the square root of num
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(isPrime(3));
