/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    if (n == 0) return ''

    let res = []
    let track = ''
    backtrack(n, n, track, res)
    return res

    function backtrack(left, right, track, res) {
        // base code
        if (right < left) return

        if (left < 0 || right < 0) {
            return
        }

        if (left == 0 && right == 0) {
            res.push(track)
            return
        }

        // 放置左括号
        track += '('
        backtrack(left - 1, right, track, res)
        // 回溯
        track = track.slice(0, -1)

        // 放置右括号
        track += ')'
        backtrack(left, right - 1, track, res)
        // 回溯
        track = track.slice(0, -1)
    }
};

// 输入：n = 3
// 输出：["((()))", "(()())", "(())()", "()(())", "()()()"]