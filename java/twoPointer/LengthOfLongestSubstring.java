/**
 * 3. Longest Substring Without Repeating Characters
 *
 * Given a string s, find the length of the longest substring without duplicate 
 * characters.
 * 
 * Example 1:
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 * 
 * Constraints:
 * 0 <= s.length <= 10^5
 * s consists of English letters, digits, symbols and spaces.
 */

package twoPointer;

import java.util.Arrays;

public class LengthOfLongestSubstring {

    public static void main(String[] args) {
        String s = "pwwkew";
        System.out.println("s: " + s);
        LengthOfLongestSubstring l = new LengthOfLongestSubstring();
        System.out.println("length: " + l.lengthOfLongestSubstring(s));
    }
    
    /**
     * 在字符串 s 上使用两个指针从左往右滑动，当快指针不是第一次遇到该字符的时候，
     * 则慢指针向右滑动，否则慢指针保持不动，同时计算出两个指针的距离
     */
    public int lengthOfLongestSubstring(String s) {
        int max = 0;
        int length = 0;
        int[] index = new int[128];
        Arrays.fill(index, -1);
        char[] ch = s.toCharArray();
        for (int i = 0, j = 0; i < s.length(); i++) {
            char c = ch[i];
            j = (j >= index[c] + 1 ? j : index[c] + 1);
            index[c] = i;
            length = i - j + 1;
            max = (max >= length ? max : length);
        }
        return max;
    }

}
