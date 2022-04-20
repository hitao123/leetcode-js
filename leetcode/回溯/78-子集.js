/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let res = [];
    backtrack(0, [])

    function backtrack (start, arr) {
        let temp = [];
        for (let i = 0; i < arr.length; i++) {
            temp[i] = arr[i]
        }

        res.push(temp)
        for (let i = start; i < nums.length; i++) {
            arr.push(nums[i])
            backtrack(start + 1, arr)
            arr.pop()
        }
    }
};

// 输入：nums = [1, 2, 3]
// 输出：[[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]