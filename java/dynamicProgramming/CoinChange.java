/**
 * You are given an integer array coins representing coins of different denominations
 * and an integer amount representing a total amount of money. Return the fewest
 * number of coins that you need to make up that amount. If that amount of money
 * cannot be made up by any combination of the coins, return -1. You may assume
 * that you have an infinite number of each kind of coin.
 * 
 * Example 1:
 * Input: coins = [1,2,5], amount = 11
 * Output: 3
 * Explanation: 11 = 5 + 5 + 1
 * 
 * Constraints:
 * 1 <= coins.length <= 12
 * 1 <= coins[i] <= 2^31 - 1
 * 0 <= amount <= 10^4
 */

package dynamicProgramming;

import java.util.Arrays;
import arrays.ArrayUtils;

public class CoinChange {

    public static void main(String[] args) {
        int[] coins = {1,2,5};
        int amount = 11;
        ArrayUtils a = new ArrayUtils();
        a.printArray(coins);
        System.out.println("amount: " + amount);
        CoinChange c = new CoinChange();
        System.out.println("n: " + c.coinChange(coins, amount));
    }

    /**
     * 用数组存储结果，索引表示金额，数值表示硬币个数，金额为0的时候硬币个数为0，用
     * 动态规划，对于每一种硬币，总金额的硬币个数等于剩余金额的硬币个数加一，对于所
     * 有硬币，取硬币个数最小者作为结果
     */
    public int coinChange(int[] coins, int amount) {
        int[] dp = new int[amount + 1];
        Arrays.fill(dp, amount + 1);
        dp[0] = 0;
        int cur = 0;
        for (int coin : coins) {
            for (int i = coin; i <= amount; i++) {
                cur = dp[i - coin] + 1;
                dp[i] = (dp[i] <= cur ? dp[i] : cur);
            }
        }
        return dp[amount] == amount + 1 ? -1 : dp[amount];
    }

}
