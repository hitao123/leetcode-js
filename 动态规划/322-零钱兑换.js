var coinChange = function (coins, amount) {
    let dp = new Array(amount + 1).fill(amount + 1)
    dp[0] = 0

    for (let i = 0; i < dp.length; i++) {
        for (let j = 0; j < coins.length; j++) {
            // i 这里就是 amount dp[i] 代表 i 当前amount 的时候最小的硬币数
            if (i - coins[j] < 0) {
                continue
            }
            dp[i] = Math.min(dp[i - coins[j]] + 1, dp[i])
        }
    }

    return dp[amount] == amount + 1 ? -1 : dp[amount]
};

console.log(coinChange([1, 2, 5], 11))