/**
 * 557. Reverse Words in a String III
 *
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
package string;

public class ReverseWords2 {

    public static void main(String[] args) {
        String s = "Let's take LeetCode contest";
        System.out.println("s: " + s);
        ReverseWords2 r = new ReverseWords2();
        System.out.println("reversed: " + r.reverseWords(s));
    }

    public String reverseWords(String s) {
        char[] arr = s.toCharArray();
        int n = arr.length;
        for (int i = 0; i < n;) {
            int j = i;
            for (; j < n && arr[j] != ' '; j++) {}
            for (int k = j - 1; i < k; i++, k--) {
                swap(arr, i, k);
            }
            i = j + 1;
        }
        return new String(arr);
    }

    private void swap(char[] s, int i, int j) {
        char temp = s[i];
        s[i] = s[j];
        s[j] = temp;
    }

}
