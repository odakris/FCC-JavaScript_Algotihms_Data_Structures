function rot13(str) {

  let newStr = '';

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  // Loop throungh str
  for (let i = 0; i < str.length; i++) {
    // Index of the current letter of str within the alphabet
    let index = alphabet.indexOf(str[i]);

    // if indexOf == -1 it's a non-alphabetic character so we add it as it is 
    if (index === -1) {
      newStr += str[i];
    }
    else {
      // Calculation of the new index base on the alphabet
      let newIndex = (index + 13) % 26;
      newStr += alphabet[newIndex];
    }
  }

  return newStr;
}

rot13("SERR PBQR PNZC");
