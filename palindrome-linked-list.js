/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {

    // newHead = [];
    // console.log(head.val)
    // while (head) {
    //     console.log(head.value)
    //     newHead.push(head.value)
    //     newHead.push(head.value)
    //     head = head.next;
    // }

//   let x = "";
//   let y = "";
//   for (const item in head) {
//     x = x + head[item];
//     y = y + head[head.length - 1 - item];
//   }
//   if (x === y) {
//     return true;
//   } else {
//     return false;
//   }
};

const head = {
    val: 1, next: 2
}



console.log(head.next);

console.log(isPalindrome(head));


 
  

