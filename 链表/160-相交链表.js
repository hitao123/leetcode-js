/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    let map = new Map()

    while (headA) {
        map.set(headA, true)
        headA = headA.next
    }

    while (headB) {
        if (map.has(headB)) {
            return headB
        }
        headB = headB.next
    }

    return null


    // 方法二 通过走相同的步数
    // let p1 = headA
    // let p2 = headB

    // let lenA = 0
    // let lenB = 0

    // while (p1) {
    //     p1 = p1.next
    //     lenA++
    // }

    // while (p2) {
    //     p2 = p2.next
    //     lenB++
    // }

    // p1 = headA
    // p2 = headB

    // if (lenA > lenB) {
    //     for (let i = 0; i < lenA - lenB; i += 1) {
    //         p1 = p1.next
    //     }
    // } else {
    //     for (let i = 0; i < lenB - lenA; i += 1) {
    //         p2 = p2.next
    //     }
    // }

    // while (p1 != p2) {
    //     p1 = p1.next
    //     p2 = p2.next
    // }

    // return p1
};