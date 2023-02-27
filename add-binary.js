/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  var i = a.length - 1;
  var j = b.length - 1;

  var carry = 0;
  var res = "";
  while (i >= 0 || j >= 0) {
    var sum = carry;
    if (j >= 0) sum += b[j--] - "0";
    if (i >= 0) sum += a[i--] - "0";
    console.log(sum);
    carry = parseInt(sum / 2);
    console.log(carry);
    res = (sum % 2) + res;
    console.log(res);
  }
  if (carry != 0) res = carry + res;
  return res;
};

console.log(addBinary("1111", "111"));
