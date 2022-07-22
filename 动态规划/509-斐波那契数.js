var fib = function (n) {
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