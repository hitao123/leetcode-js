# 动态规划的一些优化思路

## 斐波那契函数

> 像 斐波那契函数 这种存在明显的递推公式，最先想到的肯定是递归， latex 语法详细见[latex](https://zhuanlan.zhihu.com/p/59412540)

$$
F(n)=
\begin{cases}
n, n = 0,1   \\
F(n-1) + F(n-2) ,n > 2\\
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
