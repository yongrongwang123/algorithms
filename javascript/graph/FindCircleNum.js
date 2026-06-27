/**
 * There are n cities. Some of them are connected, while some are not. If city a
 * is connected directly with city b, and city b is connected directly with city
 * c, then city a is connected indirectly with city c. A province is a group of
 * directly or indirectly connected cities and no other cities outside of the group.
 * You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith
 * city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.
 * Return the total number of provinces.
 *
 * Example 1:
 * Input: isConnected = [[1,1,0],
 *                       [1,1,0],
 *                       [0,0,1]]
 * Output: 2
 *
 * Constraints:
 * 1 <= n <= 200
 * n == isConnected.length
 * n == isConnected[i].length
 * isConnected[i][j] is 1 or 0.
 * isConnected[i][i] == 1
 * isConnected[i][j] == isConnected[j][i]
 */
import { print2dArray } from '../arrays/ArrayUtils.js';

var findCircleNum = function(isConnected) {
    let count = 0;
    for (let i = 0; i < isConnected.length; i++) {
        if (isConnected[i][i] == 1) {
            helper(isConnected, i);
            count++;
        }
    }
    return count;
}

/**
 * 如果遇到1，既表示该点没有访问过，也表示该点对应的两座城市相连，以该点为中心
 * 进行横向和纵向延伸的所有点对应的城市也可以联通
 */
var helper = function(isConnected, start) {
    for (let i = 0; i < isConnected.length; i++) {
        if (isConnected[start][i] == 1 || isConnected[i][start] == 1) {
            isConnected[start][i] = 0;
            isConnected[i][start] = 0;
            helper(isConnected, i);
        }
    }
}

var main = function() {
    let isConnected = [[1,1,0],
                       [1,1,0],
                       [0,0,1]];
    print2dArray(isConnected);
    console.log('count: ' + findCircleNum(isConnected));
}

main();
