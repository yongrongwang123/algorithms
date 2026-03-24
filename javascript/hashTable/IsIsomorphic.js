/**
 * Given two strings s and t, determine if they are isomorphic. Two strings s and 
 * t are isomorphic if the characters in s can be replaced to get t. All occurrences 
 * of a character must be replaced with another character while preserving the order 
 * of characters. No two characters may map to the same character, but a character 
 * may map to itself.
 * 
 * Example 1:
 * Input: s = "egg", t = "add"
 * Output: true
 * 
 * Constraints:
 * 
 * 1 <= s.length <= 5 * 104
 * t.length == s.length
 * s and t consist of any valid ascii character.
 */

/**
 * 使用两个数组，将字符作为索引，一个用来保存s中的字符对应的索引，一个用来保存t中的字符对应
 * 的索引，如果s上一次出现当前字符所在的索引不等于t上一次出现当前字符所在的索引则返回false
 */
var isIsomorphic = function(s, t) {
  let si = new Array(256).fill(0);
  let ti = new Array(256).fill(0);

  for (let i = 0; i < s.length; i++) {
    if (si[s.charCodeAt(i)] != ti[t.charCodeAt(i)]) {
      return false;
    }
    si[s.charCodeAt(i)] = i + 1;
    ti[t.charCodeAt(i)] = i + 1;
  }

  return true;
}

let s = 'egg';
let t = 'add';
console.log('s: ' + s);
console.log('t: ' + t);
console.log('isomorphic: ' + isIsomorphic(s, t));
