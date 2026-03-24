/**
 * You're given strings jewels representing the types of stones that are jewels, 
 * and stones representing the stones you have. Each character in stones is a type 
 * of stone you have. You want to know how many of the stones you have are also 
 * jewels. Letters are case sensitive, so "a" is considered a different type of 
 * stone from "A".
 * 
 * Example 1:
 * Input: jewels = "aA", stones = "aAAbbbb"
 * Output: 3
 * 
 * Constraints:
 * 1 <= jewels.length, stones.length <= 50
 * jewels and stones consist of only English letters.
 * All the characters of jewels are unique.
 */

/**
 * 使用将字符作为索引的数组来统计字符串jewels中的字符在字符串stones中出现的次数
 */
var numJewelsInStones = function(jewels, stones) {
    let count = 0;
    let chars = new Array(58);
    let a = 'A'.charCodeAt(0);
    
    for (let i = 0; i < jewels.length; i++) {
        chars[jewels.charCodeAt(i) - a] = 1;
    }
    for (let i = 0; i < stones.length; i++) {
        if (chars[stones.charCodeAt(i) - a] == 1) {
            count++;
        }
    }

    return count;
}

let jewels = "aA";
let stones = "aAAbbbb";
console.log('jewels: ' + jewels);
console.log('stones: ' + stones);
console.log('number of jewels: ' + numJewelsInStones(jewels, stones));
