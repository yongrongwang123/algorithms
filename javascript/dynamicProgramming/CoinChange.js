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

/**
 * 用数组存储结果，索引表示金额，数值表示硬币个数，金额为0的时候硬币个数为0，用
 * 动态规划，对于每一种硬币，总金额的硬币个数等于剩余金额的硬币个数加一，对于所
 * 有硬币，取硬币个数最小者作为结果
 */
var coinChange = function(coins, amount) {
    let dp = new Array(amount + 1).fill(amount + 1);
    dp[0] = 0;
    let cur = 0;
    for (let coin of coins) {
        for (let i = coin; i <= amount; i++) {
            cur = dp[i - coin] + 1;
            dp[i] = (dp[i] <= cur ? dp[i] : cur);
        }
    }
    return dp[amount] == amount + 1 ? -1 : dp[amount];
}

var main = function() {
    let coins = [1,2,5];
    let amount = 11;
    console.log('coins: ' + coins);
    console.log('amount: ' + amount);
    console.log('n: ' + coinChange(coins, amount));
}

main();
