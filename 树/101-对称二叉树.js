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
 * @return {boolean}
 */
const isSymmetric = function (root) {
    if (root == null) {
        return true
    }

    return check(root.left, root.right)

    function check(p, q) {
        if (p == null && q == null) {
            return true
        }

        if (p == null || q == null) {
            return false
        }

        return p.val == q.val && check(p.left, q.right) && check(p.right, q.left)
    }
};
