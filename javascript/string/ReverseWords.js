/**
 * 151. Reverse Words in a String
 *
 * Given an input string s, reverse the order of the words. A word is defined as
 * a sequence of non-space characters. The words in s will be separated by at least
 * one space. Return a string of the words in reverse order concatenated by a single
 * space. Note that s may contain leading or trailing spaces or multiple spaces
 * between two words. The returned string should only have a single space separating
 * the words. Do not include any extra spaces.
 *
 * Example 1:
 * Input: s = "the sky is blue"
 * Output: "blue is sky the"
 *
 * Constraints:
 * 1 <= s.length <= 10^4
 * s contains English letters (upper-case and lower-case), digits, and spaces ' '.
 * There is at least one word in s.
 */

var reverseWords = function(s) {
    let arr = [...s];
    for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return cleanAndReverse(arr);
}

/**
 * 针对每一个单词的操作进行一次循环，先通过指针j和k来删除空格，然后通过指针i和j来反转每一
 * 个单词，最后返回0～j之间的字符
 */
var cleanAndReverse = function(arr) {
    let n = arr.length;
    let j = 0;
    for (let k = 0; k < n;) {
        for (; k < n && arr[k] == ' '; k++) {}
        let i = j;
        for (; k < n && arr[k] != ' '; j++, k++) {
            arr[j] = arr[k];
        }
        for (let h = j - 1; i < h; i++, h--) {
            [arr[i], arr[h]] = [arr[h], arr[i]];
        }
        for (; k < n && arr[k] == ' '; k++) {}
        if (k < n) {
            arr[j] = ' ';
            j++;
        }
    }
    return arr.join('').slice(0, j);
}

var main = function() {
    let s = 'the sky is blue';
    console.log('s: ' + s);
    console.log('reversed: ' + reverseWords(s));
}

main();
