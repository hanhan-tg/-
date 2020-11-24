
// https://leetcode-cn.com/problems/substring-with-concatenation-of-all-words/
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    // 暴力法
    // const hash = {};
    // const res = [];
    // const len = words[0].length;
    // // 哈希表，记录单词出现次数
    // words.forEach(e=>{
    //     hash[e] = (hash[e] || 0) + 1;
    // });
    // // 遍历所有子串
    // for(let i = 0 ; i < s.length; i++){
    //     const map = {...hash};
    //     for(let j = 0; j < words.length; j++){
    //         const subStr = s.substr(i + j * len, len);
    //         // 如果当前subStr不应该继续出现了，即值为0了，就直接结束，开启下一个字串
    //         if(!map[subStr]){
    //             break;
    //         }else{
    //             map[subStr]--;
    //             if(j === words.length - 1){
    //                 res.push(i);
    //             }
    //         }
    //     }
    // }
    // return res;
    // 时间复杂度: O(n * m), n为字符串S长度, m为words数组字符长度
    // 空间复杂度: O(m), m 为words数组长度

    // 双指针(竟然也这么慢？？？而且内存消耗更多了)
    const hash = {};
    const res = [];
    const len = words[0].length;
    let left = 0;
    let right = 0 ;
    // 哈希表，记录单词出现次数
    words.forEach(e=>{
        hash[e] = (hash[e] || 0) + 1;
    });
    let map = {...hash};
    while( left < s.length){
        const subStr = s.substr(left + right * len, len);
        if(map[subStr]){ // 如果当前字串在map中存在且不为0，说明符合条件
            map[subStr]--;
            if(right === words.length - 1){
                res.push(left);
            }
            right++; // 右指针往右走判断下一个部分
        }else{
            right = 0;// 右指针重置
            left++; // 左指针往右走
            map = {...hash}; // 如果字串不符合，就得重置map中数据
        }
    }
    return res;
    // 时间复杂度： 貌似和两层循环相同，只是在这里没用循环表示出来而已，但是效果依然是多次循环
    // 空间复杂度: O(m), m 为words数组长度
};

// 更有效的解法
// https://leetcode-cn.com/problems/substring-with-concatenation-of-all-words/solution/js-bao-li-qiu-jie-yu-hua-dong-chuang-kou-jie-fa-ji/