/**
 * Given a string s, reverse the order of characters in each word within a sentence
 * while still preserving whitespace and initial word order.
 *
 * Example 1:
 * Input: s = "Let's take LeetCode contest"
 * Output: "s'teL ekat edoCteeL tsetnoc"
 *
 * Constraints:
 * 1 <= s.length <= 5 * 10^4
 * s contains printable ASCII characters.
 * s does not contain any leading or trailing spaces.
 * There is at least one word in s.
 * All the words in s are separated by a single space.
 */

var reverseWords = function(s) {
    let arr = [...s];
    let n = arr.length;

    for (let i = 0; i < n;) {
        let j = i;
        for (; j < n; j++) {
            if (arr[j] == ' ')
                break;
        }
        reverse(arr, i, j - 1);
        i = j + 1;
    }

    return arr.join('');
}

var reverse = function(s, start, end) {
    for (; start < end; start++, end--) {
        let t = s[start];
        s[start] = s[end];
        s[end] = t;
    }
}

let s = "Let's take LeetCode contest";
console.log('s: ' + s);
console.log('reversed: ' + reverseWords(s));
