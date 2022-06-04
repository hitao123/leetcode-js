/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var detectCycle = function (head) {
    let fast = new ListNode()
    let slow = new ListNode()
    fast = head
    slow = head
    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
        if (fast === slow) {
            break
        }
    }

    if (fast == null || fast.next == null) {
        return null
    }

    slow = head
    while (slow != fast) {
        slow = slow.next
        fast = fast.next
    }
    return slow
};
