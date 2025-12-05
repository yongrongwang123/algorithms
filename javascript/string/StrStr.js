/**
 * Implement strStr(). Return the index of the first occurrence of needle in haystack,
 * or -1 if needle is not part of haystack. Clarification: What should we return
 * when needle is an empty string? This is a great question to ask during an interview.
 * For the purpose of this problem, we will return 0 when needle is an empty string.
 * This is consistent to C's strstr() and Java's indexOf().
 *
 * Example 1:
 * Input: haystack = "hello", needle = "ll"
 * Output: 2
 *
 * Constraints:
 * 0 <= haystack.length, needle.length <= 5 * 10^4
 * haystack and needle consist of only lower-case English characters.
 */

/**
 * 采用暴力搜索，两个指针分别对两个字符串从左往右扫描，如果出现不同的字符则重新开始匹配，如果
 * 匹配到子字符串则返回父字符串起始匹配索引
 */
var strStr = function(haystack, needle) {
    let m = haystack.length;
    let n = needle.length;

    for (let i = 0; i + n <= m; i++) {
        for (let j = 0; j < n; j++) {
            if (needle.charAt(j) != haystack.charAt(i + j))
                break;
            if (j == n - 1)
                return i;
        }
    }

    return -1;
}

let haystack = 'hello';
let needle = 'll';
console.log('haystack: ' + haystack);
console.log('needle: ' + needle);
console.log('index: ' + strStr(haystack, needle));
