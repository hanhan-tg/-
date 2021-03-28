// https://leetcode-cn.com/problems/island-perimeter/

var islandPerimeter = function(grid) {

    for(let r = 0; r < grid.length; r++){
        for(let c = 0; c < grid[0].length; c++){
            if(grid[r][c] == '1'){
                return dfs(grid, r, c);
            }
        }
    }

    function dfs(grid, r, c){
        // 处理边界情况
        if(!inArea(grid, r, c)) return 1;

        if(grid[r][c] == '0') return 1;
        if(grid[r][c] == '2') return 0;

        grid[r][c] = '2';// 标记表示遍历过了

        // 前后左右都走
        return dfs(grid, r - 1, c)
        + dfs(grid, r + 1, c)
        + dfs(grid, r, c - 1)
        + dfs(grid, r, c + 1);
    }

    function inArea(grid, row, column){
        return row >= 0 && row < grid.length && column >= 0 && column < grid[0].length;
    }
};