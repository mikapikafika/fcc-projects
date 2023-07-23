/*--- PALINDROME CHECKER ---*/
/* Return true if the given string is a palindrome. Otherwise, return false. */

function palindrome(str) {
    // removing non-alphanumeric characters
    // and turning everything into the same case
    const newStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    // looping through the beginning and end of an array simultaneously 
    for (let i = 0, j = newStr.length - 1; i < j; i++, j--) {
        if (newStr[i] !== newStr[j]) {
            return false;
        }
    }
  
    return true;
}

console.log(palindrome("eye"));