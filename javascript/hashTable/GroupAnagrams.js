/**
 * 49. Group Anagrams
 *
 * Given an array of strings strs, group the anagrams together. You can return the 
 * answer in any order. An Anagram is a word or phrase formed by rearranging the 
 * letters of a different word or phrase, typically using all the original letters 
 * exactly once. 
 * 
 * Example 1:
 * Input: strs = ["eat","tea","tan","ate","nat","bat"]
 * Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 * 
 * Constraints:
 * 1 <= strs.length <= 10^4
 * 0 <= strs[i].length <= 100
 * strs[i] consists of lowercase English letters.
 */

/**
 * 遍历数组时使用map来保存元素信息，键是一个长度为26的字符串，每个字符表示原来数组中字符串
 * 的字符出现的次数，值是原来数组中可以用相同键表示的字符串
 */
var groupAnagrams = function(strs) {
    let map = new Map();
    let a = 'a'.charCodeAt(0);
    for (let str of strs) {
        let freqs = new Array(26).fill(0);
        for (let c of str) {
            let i = c.charCodeAt(0) - a;
            freqs[i]++;
        }
        let key = String.fromCharCode(...freqs);
        map.set(key, map.get(key) ?? []);
        map.get(key).push(str);
    }
    return Array.from(map.values());
}

var main = function() {
    let strs = ["eat","tea","tan","ate","nat","bat"];
    console.log('strs: ' + strs);
    console.log('anagrams: ' + JSON.stringify(groupAnagrams(strs)));
}

main();
