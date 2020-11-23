// https://leetcode-cn.com/problems/number-of-boomerangs/
// 解析
// https://github.com/leetcode-pp/91alg-2/blob/master/solution/basic/d21.number-of-boomerangs-selected-1.md
var numberOfBoomerangs = function(points) {
    let count = 0;

    points.forEach( (a, i) => {
        const map = {};

        points.forEach( (b, i) => {
            if(a !== b){
                const dist = getDistance(a, b);
                // 只需要存储当前距离的点的数量即可，不需要点的坐标
                map[dist] = (map[dist] || 0) + 1;
            }
        });

        for( const dist in map){
            const num = map[dist];
            // 如果一个距离有至少两个点，那么num个点的排列组合方式有n*(n-1)种
            if(num > 1) count += num * (num - 1);
        }
    });

    return count;
};
function getDistance(pointA, pointB){
    return Math.abs((pointB[1]-pointA[1])**2 + (pointB[0]-pointA[0])**2);
}