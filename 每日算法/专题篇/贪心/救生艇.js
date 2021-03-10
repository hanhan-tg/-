// https://leetcode-cn.com/problems/boats-to-save-people/
/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    // people排序
    // 从最大的开始选，选完最大的在从头开始选小的，一个一个比
    // 如果最大的等于limit，则先把最大的处理掉
    // 一旦某个left + big > limit 则取前left前一个，left默认取0
    // 数组中再处理掉这两个数
    // 循环处理，如果people长度为1，则退出，直接加一艘船

    let end = people.length - 1;
    let start = 0;
    let ans = 0;
    people.sort((a,b) => a-b);
    while(start <= end){
        if(people[start] + people[end] <= limit){
            start++;
            end--;
        }else{
            end--;
        }
        ans++;
    } 
    return ans;
    // 时间复杂度：O(nlogn)
    // 空间复杂度：O(1)




    // let ships = 0;
    // // 排序
    // people.sort((a,b) => a-b);
    // while(people.length > 1){
    //     let rightIndex = people.length - 1;
    //     let right = people[rightIndex];
    //     // let left = 0;
    //     // let leftIndex = 0;
    //     if(right == limit){
    //         people.pop();
    //         ships++;
    //         continue;
    //     }
    //     for(let i = 0; i < rightIndex; i++){
    //         if(people[i] + right == limit  || (i == rightIndex - 1 && people[i] + right < limit)){
    //             people.splice(i,1);
    //             people.pop();
    //             ships++;
    //             break;
    //         }else if(people[i] + right > limit){
    //             if(i != 0){
    //                 people.splice(i - 1, 1);
    //             }
    //             people.pop();
    //             ships++;
    //             break;
    //         }
    //     }
    //     console.log(people,'----------', ships)
    // }
    // if(people.length == 1){
    //     ships++;
    // }
    // // console.log(people, ships)
    // return ships;
};