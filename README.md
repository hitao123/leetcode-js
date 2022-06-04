# 常见 leetcode 一些题目常见解法模板总结

## 解题模板

### 树

#### 1、树的层序遍历 （BFS）

```js
function bfs(root) {
    let res = []
    let queue = []
    queue.push(root)

    while (queue.length) {
        let size = queue.length
        for (let i = 0; i < size; i++) {
            let node = queue.shift()
            res.push(node.value)

            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
        }
    }

    return res
}
```

#### 2、树的遍历递归（DFS）

```js
    let res = []
    function dfs(root) {
        if (root == null) {
            return
        }

        res.push(root.val)
        dfs(root.left)
        dfs(root.right)

    }
```

#### 3、前序、中序、后续遍历 （递归）

```js
function traverse(root) {
    if (root == null) return
    // root.val ===> 前
    traverse(root.left)
    // root.val ===> 中
    traverse(root.right)
    // root.val ===> 后
}
```

### 链表

#### 1、获取倒数第 k 个节点

```js
function getNthNode(head, k) {
    let p = head
    for (let i = 0; i < k; i++) {
        p = p.next
    }

    let q = head
    while (p != null) {
        q = q.next
        p = p.next
    }

    return p
}
```

#### 2、获取链表中点（快慢指针）

```js
function getNodeMiddle(head) {
    let slow = head
    let fast = head
    while (fast != null && fast.next != null) {
        slow = slow.next
        fast = fast.next.next
    }
    return slow
}
```

#### 3、判断链表是否有环

```js
function hasCycle(head) {
    let slow = head
    let fast = head
    while (fast != null && fast.next != null) {
        slow = slow.next
        fast = fast.next.next
        if (slow == fast) {
            return true
        }
    }
    return false
}

```

### 回溯

### 动态规划
