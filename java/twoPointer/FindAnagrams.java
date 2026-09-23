/**
 * 438. Find All Anagrams in a String
 *
 * Given two strings s and p, return an array of all the start indices of p's anagrams
 * in s. You may return the answer in any order.
 *
 * Example 1:
 * Input: s = "cbaebabacd", p = "abc"
 * Output: [0,6]
 * Explanation:
 * The substring with start index = 0 is "cba", which is an anagram of "abc".
 * The substring with start index = 6 is "bac", which is an anagram of "abc".
 * 
 * Constraints:
 * 1 <= s.length, p.length <= 3 * 10^4
 * s and p consist of lowercase English letters.
 */

package twoPointer;

import java.util.Arrays;
import java.util.ArrayList;
import java.util.List;

public class FindAnagrams {
    public static void main(String[] args) {
        String s = "cbaebabacd";
        String p = "abc";
        System.out.println("s: " + s + ", p: " + p);
        FindAnagrams f = new FindAnagrams();
        System.out.println("index: " + f.findAnagrams(s, p));
    }

    /**
     * 首先统计字符串p中每个字符出现的次数，然后用两个指针在字符串s中形成一个滑动窗口，
     * 合法的滑动窗口必须包含字符串p中每个出现过的字符，移动右指针来获得一个合法的滑动
     * 窗口，移动左指针来获得一个更小的滑动窗口，如果滑动窗口长度和字符串p长度一样大，
     * 则记录左指针位置
     */
    public List<Integer> findAnagrams(String s, String p) {
        int n1 = p.length();
        int n2 = s.length();
        List<Integer> list = new ArrayList<>();
        if (n1 > n2) {
            return list;
        }
        int[] freqs = new int[26];
        int count = n1;
        char[] ch = s.toCharArray();
        for (char c : p.toCharArray()) {
            int i = c - 'a';
            freqs[i]++;
        }
        for (int i = 0, j = 0; i < n2; i++) {
            int k1 = ch[i] - 'a';
            freqs[k1]--;
            count -= (freqs[k1] >= 0 ? 1 : 0);
            for (; count == 0; j++) {
                if (i - j + 1 == n1) {
                    list.add(j);
                }
                int k2 = ch[j] - 'a';
                count += (freqs[k2] >= 0 ? 1 : 0);
                freqs[k2]++;
            }
        }
        return list;
    }
}
