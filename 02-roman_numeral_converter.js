function convertToRoman(num) {

  let romanNum = [];

  const roman = {
    'M': 1000,
    'CM': 900,
    'D': 500,
    'CD': 400,
    'C': 100,
    'XC': 90,
    'L': 50,
    'XL': 40,
    'X': 10,
    'IX': 9,
    'V': 5,
    'IV': 4,
    'I': 1
  };

  // Loop through roman keys table
  for (let key in roman) {

    while (roman[key] <= num) {
      // Add current key to romanNum tab
      romanNum.push(key);
      // Subtrack corresponding decimal to num
      num -= roman[key];
    }
    
  }

  return romanNum.join("");
}

convertToRoman(36);
