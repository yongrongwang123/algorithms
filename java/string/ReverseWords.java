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
package string;

public class ReverseWords {

    public static void main(String[] args) {
        String s = "the sky is blue";
        System.out.println("s: " + s);
        ReverseWords r = new ReverseWords();
        System.out.println("reversed: " + r.reverseWords(s));
    }

    public String reverseWords(String s) {
        char[] arr = s.toCharArray();
        for (int i = 0, j = arr.length - 1; i < j; i++, j--) {
            swap(arr, i, j);
        }
        return cleanAndReverse(arr);
    }

    /**
     * 针对每一个单词的操作进行一次循环，先通过指针j和k来删除空格，然后通过指针i和j来反转每一
     * 个单词，最后返回0～j之间的字符
     */
    private String cleanAndReverse(char[] arr) {
        int n = arr.length;
        int j = 0;
        for (int k = 0; k < n;) {
            for (; k < n && arr[k] == ' '; k++) {}
            int i = j;
            for (; k < n && arr[k] != ' '; j++, k++) {
                arr[j] = arr[k];
            }
            for (int h = j - 1; i < h; i++, h--) {
                swap(arr, i, h);
            }
            for (; k < n && arr[k] == ' '; k++) {}
            if (k < n) {
                arr[j] = ' ';
                j++;
            }
        }
        return new String(arr).substring(0, j);
    }

    private void swap(char[] s, int i, int j) {
        char temp = s[i];
        s[i] = s[j];
        s[j] = temp;
    }

}
