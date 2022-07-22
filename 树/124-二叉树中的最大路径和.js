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
 * @return {number}
 */
var maxPathSum = function (root) {
    let res = Number.MIN_SAFE_INTEGER
    oneSideMax(root)
    return res

    function oneSideMax(root) {
        if (root == null) {
            return 0
        }

        let left = Math.max(0, oneSideMax(root.left))
        let right = Math.max(0, oneSideMax(root.right))
        res = Math.max(res, left + right + root.val) 
        return Math.max(left, right) + root.val
    }
};