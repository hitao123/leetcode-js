// 差分数组
class Diff {
    constructor(nums) {
        this.nums = nums;
    }

    diffArr = []

    diff() {
        let len = this.nums.length
        this.diffArr = new Array(len)
        this.diffArr[0] = this.nums[0];

        for (let i = 1; i < len; i++) {
            this.diffArr[i] = this.nums[i] - this.nums[i-1]
        }

    }

    increment(start, end, val) {
        this.diffArr[start] += val
        if (end + 1 < this.diffArr.length) {
            diff[end+1] -= val
        }
    }

    result() {
        let len = this.diffArr.length
        let res = new Array(len)
        res[0] = this.diffArr[0]
        for (let i = 1; i < len; i++) {
            res[i] = this.diffArr[i] + res[i-1]
        }

        return res
    }
}

const arr = [2, 4, 7, 12, 5, 7]
//   diff = [2, 2, 3, 5, -7, 2]

let diff = new Diff(arr)
diff.diff()
diff.result()
