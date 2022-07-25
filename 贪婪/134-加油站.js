/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    let sum = 0;
    let minSum = 0;
    let len = gas.length
    let start = 0

    for (let i = 0; i < len; i++) {
        sum += gas[i] - cost[i]
        if (sum < minSum) {
            start = i + 1
            minSum = sum
        }
    }

    if (sum < 0) {
        return -1
    }

    return start == len ? 0 : start
};

// 输入: gas = [2, 3, 4], cost = [3, 4, 3]
// 输出: -1

// 输入: gas = [1, 2, 3, 4, 5], cost = [3, 4, 5, 1, 2]
// 输出: 3