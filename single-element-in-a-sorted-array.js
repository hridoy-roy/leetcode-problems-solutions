/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  let i = 0;
  while (i <= 100000 && nums[i] !== undefined) {
    //   console.log(i);
    if (nums[i] !== nums[i + 1]) {
      return nums[i];
      i++;
    } else {
      i += 2;
    }
  }
};

console.log(singleNonDuplicate([3, 3, 7, 7, 10, 11, 11]));
