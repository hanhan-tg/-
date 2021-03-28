/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let maxArea = 0;

    for(let r = 0; r < grid.length; r++){
        for(let c = 0; c < grid[0].length; c++){
            if(grid[r][c] == '1'){
                dfs(grid, r, c, 0);
            }
        }
    }
    return maxArea;

    function dfs(grid, r, c, area){
        if(!inArea(grid, r, c)) {
            return area;
        }

        if(grid[r][c] != '1') {
            return area;
        }

        grid[r][c] = '2';

        // 以下每次赋值是把一个方向的面积算完之后返回来给下个方向，这样就可以连续增加面积
        area = dfs(grid, r + 1, c, area + 1);
        area = dfs(grid, r - 1, c, area);// area不加1是因为当前位置已经计算过了
        area = dfs(grid, r, c + 1, area);
        area = dfs(grid, r, c - 1, area);
        maxArea = Math.max(area, maxArea);
        return area;
    }

    function inArea(grid, r, c){
        return r < grid.length && r >= 0 && c < grid[0].length && c >= 0;
    }
};