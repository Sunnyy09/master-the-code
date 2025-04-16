function palindrome(str) {
  let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, ""); //Output: "amanaplanacanalpanama"
  return cleanedStr === cleanedStr.split("").reverse().join("");
}

const str = "A man, a plan, a canal: Panama";
console.log(palindrome(str));
