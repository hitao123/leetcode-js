/**
 * @param {string} s
 * @return {number}
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
 */
var lengthOfLongestSubstring = function (s) {
    let win = new Map()
    let left = 0
    let right = 0
    let res = 0

    while (right < s.length) {
        // 指针右移动
        let c = s[right]
        if (win.get(c) == undefined) {
            win.set(c, 1)
        } else {
            win.set(c, win.get(c) + 1)
        }
        right++

        while (win.get(c) > 1) {
            let d = s[left]
            left++
            win.set(d, win.get(d) - 1)
        }

        res = Math.max(res, right - left)
    }

    return res
}

// 输入: s = "abcabcbb"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。