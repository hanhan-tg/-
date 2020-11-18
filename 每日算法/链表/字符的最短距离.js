// 给定一个字符串 S 和一个字符 C。返回一个代表字符串 S 中每个字符到字符串 S 中的字符 C 的最短距离的数组。
/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
    // 方法一：水波法
    // 思路： 将S中每个C的位置就记录下来，将S中每个位置和每个C比较，保留两者索引差的绝对值的最小值
    // 注： 有浪费
    // let arr = S.split("");
    // let indexArr = [];
    // let result = [];
    // for(let i = 0; i < S.length; i++){
    //     if(S[i] == C) indexArr.push(i);
    // }
    // for(let i = 0 ; i < arr.length; i++){
    //     let temp = [];
    //     indexArr.forEach( ele => {
    //         temp.push(Math.abs(i - ele));
    //     });
    //     result[i] = Math.min(...temp);
    // }
    // return result;
    // 复杂度分析：
    // 时间复杂度： O(N^K) N是S的长度，K是字符C在字符串中出现的次数，K<=N。
    // 空间复杂度： O(K)，K 为字符 C 出现的次数，记录字符 C 出现下标的辅助数组消耗的空间。

    // 方法二： 暴力法：直接从当前位置弄两个指针，一个往前走，一个往后走，遇到C就停下来，比较两边距离差小的值
    // let arr = Array(S.length).fill(0);
    // for(let i = 0 ; i < arr.length; i++){
    //     if(S[i] == C) continue;
    //     let l = i;
    //     let r = i;
    //     let shortest = Infinity;
    //     // 处理左指针
    //     while(l >= 0){
    //         if(S[l] == C){
    //             shortest = Math.min(shortest, i - l);
    //             break;
    //         }
    //         l--;
    //     }
    //     // 处理右指针
    //     while(r != arr.length){
    //         if(S[r] == C){
    //             shortest = Math.min(shortest, r - i);
    //             break;
    //         }
    //         r++;
    //     }
    //     arr[i] = shortest;
    // }
    // return arr;
    // 复杂度分析：
    // 时间复杂度： O(N^2) 最大两层循环
    // 空间复杂度： O(1)

    // 方法三：
    // 两次遍历：从左往右遍历，算出每个字符距离自己左边最近的 C 的距离 i - left，左侧最后一个出现的 C 字符的下标
    //          从右往左遍历，算出每个字符距离自己右边最近的 C 的距离 right - i，右侧最后一个出现的 C 字符的下标
    //          然后将两者比较，取最小值
    // var res = Array(S.length);
    // var cIndex = Infinity;
    // for(var i = 0 ; i < S.length; i++){
    //     if(S[i] == C) cIndex = i;
    //     res[i] = Math.abs(i - cIndex);
    // }
    // cIndex = Infinity;
    // for( i = S.length - 1; i >= 0; i--){
    //     if(S[i] == C) cIndex = i;
    //     res[i] = Math.min(res[i], cIndex - i);
    // }
    // return res;
    // 复杂度分析
    // 时间复杂度： O(N) N是字符串的长度，遍历了两次，时间消耗为2N，忽略常熟
    // 空间复杂度： O(1)

    // 方法四： 移动窗口
    var res = Array(S.length);
    var l = S[0] === C ? 0 : Infinity,
        r = S.indexOf(C, 1);
    for(var i = 0 ; i < res.length; i++){
        res[i] = Math.min(Math.abs(i - l), Math.abs(r - i));
        if(i == r){ // 如果遇到了C字符，则说明要开始下个窗口了
            l = i;
            r = S.indexOf(C, l + 1); // 从左边界的后一个字符开始找C字符
        }
    }
    return res;
    // 复杂度分析
    // 时间复杂度： O(N)  一次循环
    // 空间复杂度： O(1)
};


// 参考：https://github.com/leetcode-pp/91alg-2/blob/master/solution/basic/d2.821.shortest-distance-to-a-character-selected-1.md