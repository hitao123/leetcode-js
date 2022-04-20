var minWindow = function(s, t) {
    let need = new Map()
    let win = new Map()

    let left = 0
    let right = 0
    let valid = 0

    let start = 0
    let len = Number.MAX_SAFE_INTEGER

    for(let i = 0; i < t.length; i += 1) {
        
        if (need.get(t[i]) == undefined) {
            need.set(t[i], 1)
        } else {
            need.set(t[i], need.get(t[i]) + 1)
        }
    }

    while (right < s.length) {
        let cur = s[right]
        right++
        if (need.has(cur)) {
            // 更新 window
            if (win.get(cur) == undefined) {
                win.set(cur, 1)
            } else {
                win.set(cur, need.get(cur) + 1)
            }

            if (need.get(cur) == win.get(cur)) {
                valid++
            }
        }

        while (valid == need.size) {
            if (right - left < len) {
                start = left
                len = right - left
            }
            let cur = s[left]
            left++
            if (need.has(cur)) {
                if (win.get(cur) == need.get(cur)) {
                    valid--
                }
                win.set(cur, win.get(cur) - 1)
            }
        }
    }

    return len == Number.MAX_SAFE_INTEGER ? '' : s.substr(start, len)
};

minWindow("ADOBECODEBANC", "ABC")
// minWindow("EBBANCF", "ABC")

