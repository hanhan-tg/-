// https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof/submissions/

/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
    let res = "";
    for(let c of s){
        res += c == " " ? "%20" : c;
    }
    return res;

    // 调用库函数
    // s = s.replace(/\s/g, "%20");
};