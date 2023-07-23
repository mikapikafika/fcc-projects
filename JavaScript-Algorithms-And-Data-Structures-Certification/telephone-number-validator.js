/*--- TELEPHONE NUMBER VALIDATOR ---*/
/* Return true if the passed string looks like a valid US phone number. */

function telephoneCheck(str) {
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s.-]?)\d{3}([\s.-]?)\d{4}$/;
  // ^(1\s?)? optional 1 at the beginning with optional whitespace
  // (\(\d{3}\)|\d{3}) (XXX) or XXX, X being digits - area code
  // ([\s.-]?) optional separator - whitespace, dot or hypen
  // \d{3} next 3 digits
  // ([\s.-]?) same as before
  // \d{4}$ 4 digits at the end
  return regex.test(str);
}

telephoneCheck("555-555-5555");