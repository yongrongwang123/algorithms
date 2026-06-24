/**
 * Given two integers n and k, return all possible combinations of k numbers chosen
 * from the range [1, n]. You may return the answer in any order.
 *
 * Example 1:
 * Input: n = 4, k = 2
 * Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
 * Explanation: There are 4 choose 2 = 6 total combinations. Note that combinations
 * are unordered, i.e., [1,2] and [2,1] are considered to be the same combination.
 * 
 * Constraints:
 * 1 <= n <= 20
 * 1 <= k <= n
 */
import { print2dArray } from '../arrays/ArrayUtils.js';

var combine = function(n, k) {
    let lists = [];
    helper(lists, [], n, 1, k);
    return lists;
}

/**
 * 对于1~n范围内的每个数字，我们可以选择或者不选择，如果选择则添加当前数字到当前子集
 * ，如果不选择则不添加当前数字到当前子集，然后合并两个子集生成新的子集，如果选择的
 * 数字个数达到k个则是一个合法子集
 */
var helper = function(lists, list, n, start, k) {
    if (!k) {
        lists.push(list.slice());
    }
    if (!k || start > n - k + 1) {
        return;
    }
    list.push(start);
    helper(lists, list, n, start + 1, k - 1);
    list.pop();
    helper(lists, list, n, start + 1, k);
}

var main = function() {
    let n = 4;
    let k = 2;
    console.log('n: ' + n + ', k: ' + k);
    print2dArray(combine(n, k));
}

main();
