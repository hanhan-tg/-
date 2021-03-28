// https://leetcode-cn.com/problems/number-of-islands/

// https://leetcode-cn.com/problems/number-of-islands/solution/dao-yu-lei-wen-ti-de-tong-yong-jie-fa-dfs-bian-li-/

// 岛屿问题
var numIslands = function(grid) {
    // dfs
    let res = 0;
    for(let r = 0; r < grid.length; r++){
        for(let c = 0; c < grid[0].length; c++){
            if(grid[r][c] == '1'){
                res++;
                // 每次dfs可以把当前大陆全部置为2，当之后再次遍历到有1就说明有新大陆
                dfs(grid, r, c);
            }
        }
    }
    return res;

    function dfs(grid, row, column){
        // 处理边界情况
        if(!inArea(grid, row, column)) return;

        if(grid[row][column] != '1') return;

        grid[row][column] = '2';// 标记表示遍历过了

        // 前后左右都走
        dfs(grid, row-1, column);
        dfs(grid, row+1, column);
        dfs(grid, row, column-1);
        dfs(grid, row, column+1);
    }

    function inArea(grid, row, column){
        return row >= 0 && row < grid.length && column >= 0 && column < grid[0].length;
    }
};