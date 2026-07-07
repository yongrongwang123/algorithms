/**
 * 122. Best Time to Buy and Sell Stock II
 *
 * You are given an integer array prices where prices[i] is the price of a given
 * stock on the ith day. On each day, you may decide to buy and/or sell the stock.
 * You can only hold at most one share of the stock at any time. However, you can
 * sell and buy the stock multiple times on the same day, ensuring you never hold
 * more than one share of the stock. Find and return the maximum profit you can achieve.
 *
 * Example 1:
 * Input: prices = [7,1,5,3,6,4]
 * Output: 7
 * Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5),
 * profit = 5-1 = 4. Then buy on day 4 (price = 3) and sell on day 5 (price = 6),
 * profit = 6-3 = 3. Total profit is 4 + 3 = 7.
 *
 * Constraints:
 * 1 <= prices.length <= 3 * 10^4
 * 0 <= prices[i] <= 10^4
 */

package dynamicProgramming;

import java.util.Arrays;

public class MaxProfit {

    public static void main(String[] args) {
        int[] prices = {7,1,5,3,6,4};
        System.out.println("prices: " + Arrays.toString(prices));
        MaxProfit m = new MaxProfit();
        System.out.println("profit: " + m.maxProfit(prices));
    }

    /**
     * 要从多个子数组得到最大利润，并且可以在一天内买进再卖出，使用贪心算法，局部
     * 最优解合起来能得到全局最优解，如果明天价格比今天价格高就今天买进明天卖出，
     * 否则就保持不动
     */
    public int maxProfit(int[] prices) {
        int sum = 0;
        for (int i = 1; i < prices.length; i++) {
            int diff = prices[i] - prices[i - 1];
            sum = (diff > 0 ? diff + sum : sum);
        }
        return sum;
    }

}
