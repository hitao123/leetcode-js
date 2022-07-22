/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let dummy = new ListNode()
    dummy.next = head
    let x = findNthChild(dummy, n + 1)
    x.next = x.next.next

    return dummy.next
};

/**
 * head 链表
 * k 要查找的第一个元素
 */
function findNthChild(head, k) {
    let p1 = head

    for (let i = 0; i < k; i += 1) {
        p1 = p1.next
    }

    let p2 = head

    while (p1) {
        p1 = p1.next
        p2 = p2.next
    }


    return p2
}
