/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  var quotient = 0;

  if (dividend == 0) {
    return 0;
  } else if (dividend == -2147483648 && divisor == -1) {
    return 2147483648 - 1;
  } else if ((dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0)) {
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    while (dividend >= divisor) {
      dividend = dividend - divisor;
      quotient += 1;
    }
  } else {
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    while (dividend >= divisor) {
      dividend = dividend - divisor;
      quotient -= 1;
    }
  }
  return quotient;
};
