/*--- ROMAN NUMERAL CONVERTER ---*/
/* Convert the given number into a roman numeral. */

function convertToRoman(num) {
 const numRomanPairs = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
 };

 let result = "";
 for (const key in numRomanPairs) {
    console.log("current key: " + key);
    console.log("our num: " + num);
    while (num >= numRomanPairs[key]) {
        result += key;
        console.log("current result: " + result);
        num -= numRomanPairs[key];
        console.log("num after substraction: " + num);
    }
 }

 return result;

}

convertToRoman(36);