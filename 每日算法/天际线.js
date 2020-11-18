/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
    if(grid == null || grid.length == 0) return;
    var sum = 0;
    var arr = [[], []];
    var len = grid.length;
    for(var i = 0 ; i < len; i++){
        var max = 0;
        var site = [];
        for(var j = 0; j < len; j++){
            if(grid[i][j] >= max){
                max = grid[i][j];
                site = [i, j];
            }
        }
        arr[0].push(site);
    }
    for(var m = 0; m < len; m++){
        var max2 = 0;
        var site2 = [];
        for(var n = 0; n < len; n++){
            if(grid[n][m] >= max2){
                max2 = grid[n][m];
                site2 = [n, m];
            }
        }
        arr[1].push(site2);
    }
    for(var z = 0; z < len; z++){
        var maxSite = [];
        for (var q = 0 ; q < len; q++){
            if(grid[arr[0][z][0]][arr[0][z][1]] > grid[arr[1][q][0]][arr[1][q][1]]){
                maxSite = arr[1][q];
            }else{
                maxSite = arr[0][z];
            }
            var max3 = grid[maxSite[0]][maxSite[1]];
            var add = max3 - grid[z][q] > 0 ? max3 - grid[z][q] : 0;
            sum += add;
        }
    }
    return sum;
};
var grid = [
    [59,88,44],
    [3,18,38],
    [21,26,51]
];
console.log(maxIncreaseKeepingSkyline(grid));



[
    [59,88,44],
    [3,18,38],
    [21,26,51]
]