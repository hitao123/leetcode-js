/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let res = []
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            res = [i, map.get(target - nums[i])];
        } else {
            map.set(nums[i], i)
        }
    }

    return res;
};

// 输入：nums = [3, 3], target = 6
// 输出：[0, 1]