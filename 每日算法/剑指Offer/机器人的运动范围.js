// https://leetcode-cn.com/problems/ji-qi-ren-de-yun-dong-fan-wei-lcof/submissions/
/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function(m, n, k) {
    // 思路：这个和一般的回溯剪枝不同，机器人只向前走，所以走过的完全可以不用理会，也就是如果走走过的路，直接返回0即可，不用
    //       对走过的设置标志位再还原等操作。用一个cache来缓存走过的路，如果走过，直接返回0，没有就设置，必须要有，因为走
    //       不同方向的路可能会走相同一个位置，会导致重复添加
    // 回溯剪枝 DFS
    const cache = {};
    function f(x, y){
        if(x%10 + Math.floor(x/10)%10 + y%10 + Math.floor(y/10)%10 > k || 
           x < 0 || y < 0 || x > m-1 || y > n-1) return 0;
        const str = `${x},${y}`;
        if(cache[str])  return 0; 
        // 剪枝
        cache[str] = 1;
        return 1 + f(x - 1, y) + f(x + 1, y) + f(x, y - 1) + f(x, y + 1);
    }
    return f(0, 0);
    // 时间复杂度： O(m*n) 
    // 空间复杂度： O(m*n) 
};
var movingCount = function(m, n, k) {
    // BFS
    // 位数和
    function getSum(num) {
        let answer = 0;
        while(num) {
            answer += num % 10;
            num = Math.floor(num / 10);
        }
        return answer;
    } 
    // 方向数组
    const directionAry = [
        [-1, 0], // 上
        [0, 1], // 右
        [1, 0], // 下
        [0, -1] // 左
    ];
    // 已经走过的坐标
    let set = new Set(['0,0']);
    // 将遍历的坐标队列，题意要求从[0,0]开始走
    let queue = [[0, 0]];

    // 遍历队列中的坐标
    while(queue.length) {
        // 移除队首坐标
        let [x, y] = queue.shift();

        // 遍历方向
        for(let i = 0; i < 4; i++) {
            let offsetX = x + directionAry[i][0];
            let offsetY = y + directionAry[i][1];
            // 临界值判断
            if(offsetX < 0 || offsetX >= m || offsetY < 0 || offsetY >= n || getSum(offsetX) + getSum(offsetY) > k || set.has(`${offsetX},${offsetY}`)) {
                continue;
            }
            // 走过的格子就不再纳入统计
            set.add(`${offsetX},${offsetY}`);
            // 将该坐标加入队列（因为这个坐标的四周没有走过，需要纳入下次的遍历）
            queue.push([offsetX, offsetY]);
        }
    }
    // 走过坐标的个数就是可以到达的格子数
    return set.size;
};