/**
 * We build a table of n rows (1-indexed). We start by writing 0 in the 1st row.
 * Now in every subsequent row, we look at the previous row and replace each occurrence
 * of 0 with 01, and each occurrence of 1 with 10. For example, for n = 3, the 1st
 * row is 0, the 2nd row is 01, and the 3rd row is 0110. Given two integer n and k,
 * return the kth (1-indexed) symbol in the nth row of a table of n rows.
 *
 * Example 1:
 * Input: n = 1, k = 1
 * Output: 0
 * Explanation: row 1: 0
 *
 * Constraints:
 * 1 <= n <= 30
 * 1 <= k <= 2^n - 1
 */

/**
 *     0
 *    / \
 *   0   1
 *  / \ / \
 * 0  1 1  0
 * 递归法：所有的0和1组合起来可以看成一个二叉树，如果当前节点是0，则它的两个左右子节点分别
 * 是0和1，如果当前节点是1，则它的两个左右子节点分别是1和0。如果子节点是当前行的第k个节点，
 * 则父节点是上一行的第(k+1)/2个节点，通过在树上递归来不断向上查找父节点直到根结点，然后
 * 再由父节点一层层判断得到子节点值
 */
var kthGrammar = function(n, k) {
    if (n == 1) {
        return 0;
    }
    let grammar = kthGrammar(n - 1, parseInt((k + 1) / 2));
    return k % 2 == 1 ? grammar : grammar ^ 1;
}

var main = function() {
    for (let i = 1; i <= 5; i++) {
        let str = '';
        let length = Math.pow(2, i - 1);
        for (let j = 1; j <= length; j++) {
            str += kthGrammar(i, j) + ' ';
        }
        console.log(str);
    }
}

main();
