/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {

    if (n <= 0 || k > n) {
        return []
    }

    const ans = [];

    // 从 1 开始
    dfs(1, []);

    return ans;

    function dfs(begin, res) {
        if (res.length === k) {
            ans.push(res);
            return;
        }

        if (begin > n) {
            return
        }

        for (let i = begin; i <= n; i += 1) {
            dfs(i + 1, res.concat(i));
        }
    }
};
