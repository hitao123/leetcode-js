// 一维前缀和

class SuffixSum {
    constructor(nums) {
        this.nums = nums
    }

    preSum = []

    sumRange(start, end) {
        return this.preSum[end + 1] - this.preSum[start]
    }

    numArray() {
        let len = this.nums.length
        this.preSum = new Array(len + 1)
        this.preSum[0] = 0
        for (let i = 1; i <= len; i++) {
            this.preSum[i] = this.nums[i - 1] + this.preSum[i - 1]
        }
    }
}

// 1 2 3 4 5 6 7
// 0 1 3 6 10 15 21 28

let arr = [1, 2, 3, 4, 5, 6, 7]

let suffix = new SuffixSum(arr)
suffix.numArray()
console.log(suffix.sumRange(2, 5)) // 18


// 二维前缀和

class SuffixMatrixSum {
    constructor(matrix) {
        this.matrix = matrix
    }

    preSum = []

    numMatrix() {
        let m = this.matrix.length
        let n = this.matrix[0].length
        if (m == 0 || n == 0) return
        this.preSum = new Array(m + 1).fill(0).map(() => {
            return new Array(n + 1).fill(0)
        })

        for (let i = 1; i <= m; i++) {
            for (let j = 1; j <= n; j++) {
                this.preSum[i][j] = this.preSum[i][j-1] + this.preSum[i-1][j] + this.matrix[i-1][j-1] - this.preSum[i-1][j-1]
            }
        }
    }

    sumRange(x1, y1, x2, y2) {
        console.log(this.preSum)
        return this.preSum[x2+1][y2+1] - this.preSum[x2+1][y1] - this.preSum[x1][y2+1] + this.preSum[x1][y1]
    }
}

// 3 0 1 4 2
// 5 6 3 2 1
// 1 2 0 1 5
// 4 1 0 1 7
// 1 0 3 0 5

let matrix = [[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]]

let sum = new SuffixMatrixSum(matrix)
sum.numMatrix()
console.log(sum.sumRange(2, 2, 3, 3))
