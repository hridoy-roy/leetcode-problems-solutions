/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  let i = 0;
  let oldStr = s.slice(0, k);
  let newStr = "";
  while (k > 0) {
    newStr += s[k - 1];
    k--;
  }
  return s.replace(oldStr, newStr);
};

console.log(reverseStr("abcd", 2));
