/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 *
 * Example 1:
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 *
 * Constraints:
 * 1 <= s.length, t.length <= 5 * 10^4
 * s and t consist of lowercase English letters.
 */

package string;

public class IsAnagram {
    
    public static void main(String[] args) {
        String s = "anagram";
        String t = "nagaram";
        IsAnagram i = new IsAnagram();
        System.out.println("s: " + s + ", t: " + t);
        System.out.println("anagram: " + i.isAnagram(s, t));
    }

    /**
     * 用一个长度为26的数组统计两个字符串中字符出现次数，如果出现次数相同则返回 true，
     * 否则返回 false
     */
    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) {
            return false;
        }
        int[] freq = new int[26];

        for (char c : s.toCharArray()) {
            freq[c - 'a']++;
        }
        for (char c : t.toCharArray()) {
            freq[c - 'a']--;
            if (freq[c - 'a'] < 0) {
                return false;
            }
        }

        return true;
    }

}
