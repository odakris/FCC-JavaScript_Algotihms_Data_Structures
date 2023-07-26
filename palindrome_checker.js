function palindrome(str) {
  
  let newStr = str.toLowerCase().match(/[a-z0-9]/g).join("");
  let newStrReverse = str.toLowerCase().match(/[a-z0-9]/g).reverse().join("");

  return newStr === newStrReverse;

}

palindrome("1 eye for of 1 eye.");
