/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    let res = []
    let track = []
    let sum = 0

    candidates.sort((a, b) => {
        return a - b
    })

    backtrack(0)

    function backtrack(start) {
        if (sum == target) {
            let temp = []
            for (let i = 0; i < track.length; i++) {
                temp[i] = track[i]
            }
            res.push(temp)
        }

        if (sum > target) {
            return
        }

        for (let i = start; i < candidates.length; i++) {
            if (i > start && candidates[i] == candidates[i - 1]) {
                continue;
            }

            track.push(candidates[i])
            sum += candidates[i]
            backtrack(i + 1)
            track.pop()
            sum -= candidates[i]
        }
    }

    return res
};