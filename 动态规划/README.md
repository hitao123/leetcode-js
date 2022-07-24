# 动态规划的一些优化思路

## 斐波那契函数

> 像 斐波那契函数 这种存在明显的递推公式，最先想到的肯定是递归， latex 语法详细见[latex](https://zhuanlan.zhihu.com/p/59412540)

$$
F(n)=
\begin{cases}
n,\quad n = 0,1   \\
F(n-1) + F(n-2),\quad n > 2\\
\end{cases}
$$

有了上面的公式，很容易写出下面的解法

```js
var fib = function(n) {
    // 递归版本
    if (n == 0 || n == 1) {
        return n
    }

    return fib(n-1) + fib(n-2)
}
```

上面这种解法存在一些冗余计算，可以进行一些优化，使用备忘录进行优化一下

```js
var fib = function(n) {
    let memo = new Array(n+1).fill(-1)

    return helper(memo, n)

    function helper(memo, n) {
        if (n == 0 || n == 1) {
            return n
        }

        if (memo[n] != -1) return memo[n]

        memo[n] = helper(memo, n-1) + helper(memo, n-2)
        return memo[n]
    }
}

```

上面的备忘录可以使用 dp 进行再一次的优化

```js
var fib = function(n) {
    let dp = new Array(n+1).fill(0)

    dp[0] = 0
    dp[1] = 1

    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2]
    }

    return dp[n]
}
```

由于 dp 里面的两个变量是可以重复利用的，空间复杂度可以进一步降低

```js
var fib = function(n) {
    if (n == 0 || n == 1) {
        return n;
    }

    let dp_1 = 0
    let dp_2 = 1

    for (let i = 2; i <= n; i++) {
        dp_i = dp_1 + dp_2
        dp_1 = dp_2
        dp_2 = dp_i
    }

    return dp_1
}
```

## 零钱兑换

> 零钱存在3种，可以无限使用，假如使用 dp() 表示返回的零钱最小数量，我们可以列出下面公式

$$
dp(n)=
\begin{cases}
0, \quad n = 0   \\
-1, \quad n < 0\\
min \{ dp(n-coin) + 1 \}, \quad n > 0
\end{cases}
$$

```js
var coinChange = function(coins, amount) {
    return dp(coins, amount) 
};

function dp(coins, amount) {
    // base case
    if (amount == 0) {
        return 0
    }

    if (amount < 0) {
        return -1
    }

    let res = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < coins.length; i++) {
        let subProblem = dp(coins, amount - coins[i])
        if (subProblem == -1) {
            continue
        }
        res = Math.min(res, subProblem + 1)
    }

    return res != Number.MAX_SAFE_INTEGER ? res : -1
}
```

基于上面斐波那契的方式，我们可以通过剪枝来优化我们的解法, 使用一个备忘录来存储每次的计算结果

```js
var coinChange = function(coins, amount) {
    let memo = new Array(amount + 1).fill(-999)
    return dp(coins, amount) 

    function dp(coins, amount) {
        // base case
        if (amount == 0) {
            return 0
        }

        if (amount < 0) {
            return -1
        }

        if (memo[amount] != -999) {
            return memo[amount]
        }

        let res = Number.MAX_SAFE_INTEGER;
        for (let i = 0; i < coins.length; i++) {
            let subProblem = dp(coins, amount - coins[i])
            if (subProblem == -1) {
                continue
            }
            res = Math.min(res, subProblem + 1)
        }

        memo[amount] = res != Number.MAX_SAFE_INTEGER ? res : -1

        return memo[amount]
    }
};
```

上面是自顶向下的一个解法，我们可以再尝试使用自底向上的解法

```js
var coinChange = function(coins, amount) {
    let dp = new Array(amount + 1).fill(amount + 1)
    dp[0] = 0

    for (let i = 0; i < dp.length; i++) {
        for (let j = 0; j < coins.length; j++) {
            // i 这里就是 amount dp[i] 代表 i 当前amount 的时候最小的硬币数
            if (i - coins[j] < 0) {
                continue
            }
            dp[i] = Math.min(dp[i-coins[j]] + 1, dp[i])
        }
    }

    return dp[amount] == amount + 1 ? -1 : dp[amount]
};
```

## 自顶向下 & 自底向上

```bash
从上面两道题目的解法可以看出
自顶向下: 是使用递归的方式，加上备忘录进行剪枝进行优化，使用 dp 函数进行定义
自底向上: 通过初始的 case， 从 0 进行像后进行计算，使用数组定义 dp
这类题目需要注意的是边界，以及 dp 函数的含义
```

## 最长递增子序列

> 这道题我们使用自底向上的思路，首先定义 dp[i] 代表 以 i 为终点的最长递增长度，那么我们可以找到小于 i 的当前 dp[j] 加上 1 就是当前最大的最长递增长度，获取 dp 每个位置的最长递增长度，由于是求最大的，需要将数据遍历一下取出最大值

```js
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
};
```
