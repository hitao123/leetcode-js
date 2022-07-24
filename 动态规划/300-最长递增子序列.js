/**
 * @param {number[]} nums
 * @return {number}
 */
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