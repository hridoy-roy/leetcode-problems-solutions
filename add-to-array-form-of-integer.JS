/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
  let i = num.length - 1;
  let number = [];
  let carey = 0;
  let j;

  let arr = String(k)
    .split("")
    .map((k) => {
      return Number(k);
    });

  j = arr.length - 1;

  while (i >= 0 || j >= 0) {
      let sum = carey;
      
      if (arr[j] !== undefined)  sum += arr[j--];
    if (num[i] !== undefined) sum += num[i--];
    
    carey = parseInt(sum / 10);
    number.push(sum % 10);
  }

  if (carey !== 0) {
    number.push(carey);
  }

  return number.reverse();
};

console.log(addToArrayForm([1,2,0,0], 34));
