// https://leetcode-cn.com/problems/max-increase-to-keep-city-skyline/submissions/

// 思路：找出每列最大，找出每行最大，然后遍历用当前i,j所在的行列的最大值的小者来减去当前值就是当前位置可以多加的值
var maxIncreaseKeepingSkyline = function (grid) {
    const rMax = new Array(grid.length).fill(0);
    const cMax = new Array(grid.length).fill(0);
    let ans = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            rMax[i] = Math.max(rMax[i], grid[i][j]);
            cMax[j] = Math.max(cMax[j], grid[i][j]);
        }
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            ans += Math.min(cMax[j], rMax[i]) - grid[i][j];
        }
    }
    return ans;
};


// 下面的，只能说，懂的都懂，没办法，哎呀，没办法啊
// var maxIncreaseKeepingSkyline = function(grid) {
//     if(grid == null || grid.length == 0) return;
//     var sum = 0;
//     var arr = [[], []];
//     var len = grid.length;
//     for(var i = 0 ; i < len; i++){
//         var max = 0;
//         var site = [];
//         for(var j = 0; j < len; j++){
//             if(grid[i][j] >= max){
//                 max = grid[i][j];
//                 site = [i, j];
//             }
//         }
//         arr[0].push(site);
//     }
//     for(var m = 0; m < len; m++){
//         var max2 = 0;
//         var site2 = [];
//         for(var n = 0; n < len; n++){
//             if(grid[n][m] >= max2){
//                 max2 = grid[n][m];
//                 site2 = [n, m];
//             }
//         }
//         arr[1].push(site2);
//     }
//     for(var z = 0; z < len; z++){
//         var maxSite = [];
//         for (var q = 0 ; q < len; q++){
//             if(grid[arr[0][z][0]][arr[0][z][1]] > grid[arr[1][q][0]][arr[1][q][1]]){
//                 maxSite = arr[1][q];
//             }else{
//                 maxSite = arr[0][z];
//             }
//             var max3 = grid[maxSite[0]][maxSite[1]];
//             var add = max3 - grid[z][q] > 0 ? max3 - grid[z][q] : 0;
//             sum += add;
//         }
//     }
//     return sum;
// };
// var grid = [
//     [59,88,44],
//     [3,18,38],
//     [21,26,51]
// ];
// console.log(maxIncreaseKeepingSkyline(grid));



// [
//     [59,88,44],
//     [3,18,38],
//     [21,26,51]
// ]