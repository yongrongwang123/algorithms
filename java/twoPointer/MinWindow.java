/**
 * 76. Minimum Window Substring
 * 
 * Given two strings s and t of lengths m and n respectively, return the minimum
 * window substring of s such that every character in t (including duplicates) is
 * included in the window. If there is no such substring, return the empty string
 * "". The testcases will be generated such that the answer is unique.
 * 
 * Example 1:
 * Input: s = "ADOBECODEBANC", t = "ABC"
 * Output: "BANC"
 * Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from
 * string t.
 * 
 * Constraints:
 * m == s.length
 * n == t.length
 * 1 <= m, n <= 10^5
 * s and t consist of uppercase and lowercase English letters.
 */

package twoPointer;

public class MinWindow {
    public static void main(String[] args) {
        String s = "ADOBECODEBANC";
        String t = "ABC";
        System.out.println("s: " + s + ", t: " + t);
        MinWindow m = new MinWindow();
        System.out.println("window: " + m.minWindow(s, t));
    }

    /**
     * 首先统计字符串t中每个字符出现的次数，然后用两个指针在字符串s中形成一个滑动窗口，
     * 合法的滑动窗口必须包含字符串t中每个出现过的字符，移动右指针来获得一个合法的滑动
     * 窗口，移动左指针来获得一个更小的滑动窗口，如果当前滑动窗口长度小于之前最小的，则
     * 记录左指针位置
     */
    public String minWindow(String s, String t) {
        int n1 = t.length();
        int n2 = s.length();
        if (n1 > n2) {
            return "";
        }
        int[] freqs = new int[58];
        int count = n1;
        int start = 0;
        int end = n2 + 1;
        char[] ch = s.toCharArray();
        for (char c : t.toCharArray()) {
            int i = c - 'A';
            freqs[i]++;
        }
        for (int i = 0, j = 0; i < n2; i++) {
            int k1 = ch[i] - 'A';
            freqs[k1]--;
            count -= (freqs[k1] >= 0 ? 1 : 0);
            for (; count == 0; j++) {
                if (end - start > i - j + 1) {
                    end = i + 1;
                    start = j;
                }
                int k2 = ch[j] - 'A';
                count += (freqs[k2] >= 0 ? 1 : 0);
                freqs[k2]++;
            }
        }
        return end == n2 + 1 ? "" : s.substring(start, end);
    }
}
