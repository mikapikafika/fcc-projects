/*--- CAESAR'S CIPHER ---*/
/* One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. 
In a shift cipher the meanings of the letters are shifted by some set amount.
A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. 
Thus A ↔ N, B ↔ O and so on.
Write a function which takes a ROT13 encoded string as input and returns a decoded string. */

function rot13(str) {
  return str.replace(/[A-Z]/g, (char) => {
    const asciiChar = char.charCodeAt(0);
    // adding 26 to wrap around the letters A-Z
    const decodedChar = ((asciiChar - 13 +26 - 65) % 26) + 65;
    return String.fromCharCode(decodedChar);
  });
}

rot13("SERR PBQR PNZC");