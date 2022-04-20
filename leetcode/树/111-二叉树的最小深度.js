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
const minDepth = function (root) {
    let queue = [];
    let depth = 0;

    if (root == null) {
        return 0
    }

    queue.push(root)
    while (queue.length) {
        let size = queue.length
        for (let i = 0; i < size; i++) {
            let node = queue.shift()
            if (node.left == null && node.right == null) {
                return depth
            }
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
        }
        depth++;
    }

    return depth;
}