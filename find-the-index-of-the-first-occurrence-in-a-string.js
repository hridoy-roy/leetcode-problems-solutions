/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  const haystackArr = haystack.split("");
  const needleArr = needle.split("");
  let index = -1;
  let s = 0;

  for (let i = 0; i < haystackArr.length; i++) {
    if (haystackArr[i] === needleArr[s]) {
      if (index < 0 && s === needleArr.length - 1) {
        index = i - (needleArr.length - 1);
      }
      s++;
    } else {
      if (s > 0) {
        i = i - s;
      }

      s = 0;
    }
  }
  return index;
};

console.log(strStr("mississippi", "pi"));
