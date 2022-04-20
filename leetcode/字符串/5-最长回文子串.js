/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
    let res = ''

    for (let i = 0; i < s.length; i += 1) {
        let s1 = help(s, i, i)
        let s2 = help(s, i, i + 1)
        res = s1.length > res.length ? s1 : res
        res = s2.length > res.length ? s2 : res
    }

    return res

    function help(s, left, right) {
        while (left >= 0 && right < s.length && s[left] == s[right]) {
            left--
            right++
        }

        // substring 不包含末尾
        return s.substring(left + 1, right)
    }
};

// 输入：s = "babad"
// 输出："bab"
// 解释："aba" 同样是符合题意的答案。