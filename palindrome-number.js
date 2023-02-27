/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  y = x.toString().split("").reverse().join("");
  y = Number(y);
  if (x === y) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome(2002));
