/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let tokenMap = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    let stack = [-1];

    // 字符串长度为奇数 直接返回false
    if (s.length % 2 !== 0) {
        return false
    }

    for (let i = 0; i < s.length; i += 1) {
        if (tokenMap[s[i]]) {
            stack.push(s[i]);
        } else {
            let currentStackTop = stack[stack.length - 1];
            if (tokenMap[currentStackTop] !== s[i]) {
                return false;
            } else {
                stack.pop();
            }
        }
    }

    return stack.length === 1;
};