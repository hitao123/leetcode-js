/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permuteUnique = function (nums) {
    let res = []
    let used = new Array(nums.length).fill(0)
    nums.sort((a, b) => { return a - b })
    backtrack(nums, [])

    return res

    function backtrack(nums, track) {
        // base code
        if (track.length == nums.length) {
            let temp = []
            // 这里需要深度copy 一下，否则返回 []
            for (let i = 0; i < track.length; i += 1) {
                temp.push(track[i])
            }
            res.push(temp)
            return
        }

        for (let i = 0; i < nums.length; i += 1) {
            if (used[i]) {
                continue
            }

            if (i > 0 && nums[i] == nums[i - 1] && !used[i - 1]) {
                continue;
            }

            track.push(nums[i])
            used[i] = 1
            // 进入下一层
            backtrack(nums, track)
            // 取消选择
            track.pop()
            used[i] = 0
        }
    }
};
