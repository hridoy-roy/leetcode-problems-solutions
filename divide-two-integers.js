/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  let count = 0;
  let negativeDividend = false;
  let negativeDivisor = false;
  divisor < 0 ? (negativeDivisor = true) : (negativeDivisor = false);
  dividend < 0 ? (negativeDividend = true) : (negativeDividend = false);

  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);

  while (dividend >= divisor) {
    dividend -= divisor;
    count++;
  }

  if (!negativeDividend && negativeDivisor && count > 2147483648) {
    count = -2147483648;
  } else if (negativeDividend && !negativeDivisor && count > 2147483648) {
    count = -2147483648;
  } else if (
    (negativeDividend || negativeDivisor) &&
    (!negativeDividend || !negativeDivisor)
  ) {
    count = -count - count + count;
  } else if (count > 2147483647) {
    count = 2147483647;
  }

  return count;
};

console.log(divide(-2147483648, 1));
