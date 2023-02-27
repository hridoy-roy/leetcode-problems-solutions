/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  const x = BigInt(num1);
  const y = BigInt(num2);
    return BigInt(x + y).toString();
};

console.warn(addStrings("9333852702227987", "85731737104263"));
