/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let head = new ListNode(-1)
    let prev = head
    let p1 = list1
    let p2 = list2

    while (p1 && p2) {
        if (p1.val < p2.val) {
            prev.next = p1
            p1 = p1.next
        } else {
            prev.next = p2
            p2 = p2.next
        }
        prev = prev.next
    }

    prev.next = (p1 !== null ? p1 : p2)

    return head.next

};
