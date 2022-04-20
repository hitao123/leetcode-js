/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrderBottom = function (root) {
    let queue = [];
    let res = [];

    queue.push(root)
    while (queue.length) {
        let arr = [];
        let size = queue.length
        for (let i = 0; i < size; i++) {
            let node = queue.shift()
            if (node == null) {
                return []
            }
            arr.push(node.val)
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
        }
        res.unshift(arr)
    }
}