// https://leetcode-cn.com/problems/queue-reconstruction-by-height/

/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    const ans = [];
    people.sort((a, b) => {
        if(a[0] == b[0]){
            return a[1] - b[1];
        }
        return b[0] - a[0];
    })
    for( let i = 0; i < people.length; i++){
        ans.splice(people[i][1], 0, people[i])
    }
    return ans
};