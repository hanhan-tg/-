// https://leetcode-cn.com/problems/assign-cookies/

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    // g 是需要的饼干量
    // s 是饼干量
    // 每个孩子最多只能给一块饼干
    

    // 排序
    g.sort((a,b) => a-b);
    s.sort((a,b) => a-b);

    let gp = 0;
    let sp = 0;
    while(gp < g.length && sp < s.length){
        if(s[sp] >= g[gp]){
            gp++;
        }
        sp++;
    }
    return gp;
};