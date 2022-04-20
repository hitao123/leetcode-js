/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    // 归并
    return merge(lists, 0, lists.length - 1)
    function merge(lists, left, right) {
        if (left == right) {
            return lists[left]
        }
        if (left > right) {
            return null
        }

        let mid = Math.floor((left + right) / 2)
        return mergeTwoLists(merge(lists, left, mid), merge(lists, mid + 1, right))
    }
};


// 合并两个数组
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