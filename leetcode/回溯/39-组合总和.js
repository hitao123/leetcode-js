/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let res = []

    backtrack(candidates, [], 0, target)
    return res

    function backtrack(nums, arr, start, target) {
        // base code
        if (target < 0) {
            return
        }

        if (target == 0) {
            let temp = []
            for (let i = 0; i < arr.length; i += 1) {
                temp[i] = arr[i]
            }
            res.push(temp)
        }
        for (let i = start; i < nums.length; i++) {
            if (target >= nums[i]) {
                arr.push(nums[i])
                backtrack(nums, arr, i, target - nums[i])
                arr.pop()
            }
        }
    }
};