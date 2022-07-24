/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function (envelopes) {
    // 宽度进行升序排序, 在宽度的基础上在进行高度进行降序排序
    envelopes = envelopes.sort((a, b) => {
        return a[0] == b[0] ?
            b[1] - a[1] : a[0] - b[0];
    })

    let height = new Array(envelopes.length)
    for (let i = 0; i < envelopes.length; i++) {
        height[i] = envelopes[i][1]
    }

    return lengthOfLIS(height)
};

var lengthOfLIS = function (nums) {
    let dp = new Array(nums.length).fill(1)

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
    }

    let res = Number.MIN_SAFE_INTEGER

    for (let i = 0; i < dp.length; i++) {
        res = Math.max(dp[i], res)
    }

    return res
};

let arr = [[5, 4], [6, 4], [6, 7], [2, 3]]
console.log(maxEnvelopes(arr))