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

    // 下面是二分法 复杂度更低，但是很难想到这种解法，还是上面的暴力破解更容易理解
    // let top = new Array(nums.length);
    // // 牌堆数初始化为 0
    // let piles = 0;
    // for (let i = 0; i < nums.length; i++) {
    //     // 要处理的扑克牌
    //     let poker = nums[i];

    //     /***** 搜索左侧边界的二分查找 *****/
    //     let left = 0, right = piles;
    //     while (left < right) {
    //         let mid = Math.floor((left + right) / 2);
    //         if (top[mid] > poker) {
    //             right = mid;
    //         } else if (top[mid] < poker) {
    //             left = mid + 1;
    //         } else {
    //             right = mid;
    //         }
    //     }
    //     // 没找到合适的牌堆，新建一堆
    //     if (left == piles) piles++;
    //     // 把这张牌放到牌堆顶
    //     top[left] = poker;
    // }
    // // 牌堆数就是 LIS 长度
    // return piles;
};

const arr = [2, 3, 6, 5, 1, 10]

lengthOfLIS(arr)