/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * 递归版本
 */
// const reverseList = function (head) {
//     if (head == null || head.next == null) {
//         return head
//     }

//     const last = reverseList(head.next)
//     head.next.next = head
//     head.next = null
//     return last
// }

// 方法二
const reverseList = function (head) {
    let prev = null;
    let cur = head;

    while (cur) {
        let next = cur.next;
        cur.next = prev

        prev = cur
        cur = next;
    }

    return prev
}