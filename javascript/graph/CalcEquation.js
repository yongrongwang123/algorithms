/**
 * You are given an array of variable pairs equations and an array of real numbers
 * values, where equations[i] = [A_i, B_i] and values[i] represent the equation
 * A_i / B_i = values[i]. Each A_i or B_i is a string that represents a single variable.
 * You are also given some queries, where queries[j] = [C_j, D_j] represents the jth
 * query where you must find the answer for C_j / D_j = ?. Return the answers to all
 * queries. If a single answer cannot be determined, return -1.0. Note: The input
 * is always valid. You may assume that evaluating the queries will not result in
 * division by zero and that there is no contradiction. Note: The variables that
 * do not occur in the list of equations are undefined, so the answer cannot be
 * determined for them.
 *
 * Example 1:
 * Input: equations = [["a","b"],["b","c"]], values = [2.0,3.0],
 * queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]
 * Output: [6.00000,0.50000,-1.00000,1.00000,-1.00000]
 * Explanation:
 * Given: a / b = 2.0, b / c = 3.0
 * queries are: a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ?
 * return: [6.0, 0.5, -1.0, 1.0, -1.0 ]
 * note: x is undefined => -1.0
 *
 * Constraints:
 * 1 <= equations.length <= 20
 * equations[i].length == 2
 * 1 <= A_i.length, B_i.length <= 5
 * values.length == equations.length
 * 0.0 < values[i] <= 20.0
 * 1 <= queries.length <= 20
 * queries[i].length == 2
 * 1 <= C_j.length, D_j.length <= 5
 * A_i, B_i, C_j, D_j consist of lower case English letters and digits.
 */
import { print2dArray } from '../arrays/ArrayUtils.js';

var calcEquation = function(equations, values, queries) {
    let map = {};
    let n = queries.length;
    let answers = new Array(n);
    for (let i = 0; i < values.length; i++) {
        let u = equations[i][0];
        let v = equations[i][1];
        let radio = values[i];
        map[u] = map[u] ? map[u] : {};
        map[v] = map[v] ? map[v] : {};
        map[u][v] = radio;
        map[v][u] = 1 / radio;
    }
    for (let i = 0; i < n; i++) {
        let start = queries[i][0];
        let end = queries[i][1];
        let answer = -1;
        if (map[start] && map[end]) {
            answer = helper(start, end, map, []);
        }
        answers[i] = answer;
    }
    return answers;
}

/**
 * 将字母作为顶点，数字作为权重，问题变成在有向图中判断两点是否相连，如果相连则
 * 返回路径上的权重之积，使用深度优先搜索遍历图来查找两点之间的路径
 */
var helper = function(start, end, map, visited) {
    visited.push(start);
    let neighbors = map[start];
    if (neighbors[end]) {
        return neighbors[end];
    }
    for (let next of Object.keys(neighbors)) {
        if (visited.includes(next)) {
            continue;
        }
        let weight = helper(next, end, map, visited);
        if (weight != -1) {
            return weight * neighbors[next];
        }
    }
    return -1;
}

var main = function() {
    let equations = [["a","b"],["b","c"]];
    let values = [2.0,3.0];
    let queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]];
    console.log('equations');
    print2dArray(equations);
    console.log('queries');
    print2dArray(queries);
    console.log('values: ' + values);
    console.log('output: ' + calcEquation(equations, values, queries));
}

main();
