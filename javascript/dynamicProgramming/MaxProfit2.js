/**
 * You are given an array prices where prices[i] is the price of a given stock on
 * the ith day. You want to maximize your profit by choosing a single day to buy
 * one stock and choosing a different day in the future to sell that stock. Return
 * the maximum profit you can achieve from this transaction. If you cannot achieve
 * any profit, return 0.
 *
 * Example 1:
 * Input: prices = [7,1,5,3,6,4]
 * Output: 5
 * Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6),
 * profit = 6-1 = 5. Note that buying on day 2 and selling on day 1 is not allowed
 * because you must buy before you sell.
 *
 * Constraints:
 * 1 <= prices.length <= 10^5
 * 0 <= prices[i] <= 10^4
 */

/**
 * 要从一个子数组得到最大利润，并且不可以在一天内买进再卖出，使用动态规划，局部
 * 最优解中选择最大的得到全局最优解，如果明天价格比买进价格低就今天卖出明天重新
 * 买进，否则就保持买进时间不变
 */
var maxProfit = function(prices) {
    let pre = 0;
    let cur = 0;
    for (let i = 1; i < prices.length; i++) {
        cur += prices[i] - prices[i - 1];
        cur = (cur > 0 ? cur : 0);
        pre = (pre >= cur ? pre : cur);
    }
    return pre;
}

var main = function() {
    let prices = [7,1,5,3,6,4];
    console.log('prices: ' + prices);
    console.log('profit: ' + maxProfit(prices));
}

main();
