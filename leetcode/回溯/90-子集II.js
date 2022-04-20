/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    let res = []
    let track = []

    nums.sort((a, b) => {
        return a - b
    })

    backtrack(0)

    function backtrack(start) {
        let temp = []
        for (let i = 0; i < track.length; i++) {
            temp[i] = track[i]
        }
        res.push(temp)

        for (let i = start; i < nums.length; i++) {
            if (i > start && nums[i] == nums[i - 1]) {
                continue;
            }

            track.push(nums[i])
            backtrack(i + 1)
            track.pop()
        }
    }

    return res
};

// 输入：nums = [1, 2, 2]
// 输出：[[], [1], [1, 2], [1, 2, 2], [2], [2, 2]]