/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let carry = 0
    let sum = 0
    let dummy = new ListNode()
    let cur = dummy

    while (l1 || l2 || carry > 0) {
        sum = carry
        if (l1) {
            sum += l1.val
            l1 = l1.next
        }

        if (l2) {
            sum += l2.val
            l2 = l2.next
        }

        carry = Math.floor(sum / 10)
        let temp = new ListNode(sum % 10)

        cur.next = temp
        cur = temp
    }

    return dummy.next
};

// 输入：l1 = [2, 4, 3], l2 = [5, 6, 4]
// 输出：[7, 0, 8]
// 解释：342 + 465 = 807