/**
 * 387. First Unique Character in a String
 *
 * Given a string s, find the first non-repeating character in it and return its 
 * index. If it does not exist, return -1.
 * 
 * Example 1:
 * Input: s = "leetcode"
 * Output: 0
 * 
 * Constraints:
 * 1 <= s.length <= 10^5
 * s consists of only lowercase English letters.
 */

package hashTable;

public class FirstUniqChar {

    public static void main(String[] args) {
        String s = "leetcode";
        System.out.println("s: " + s);
        FirstUniqChar f = new FirstUniqChar();
        System.out.println("index: " + f.firstUniqChar(s));
    }
    
    /**
     * 使用将字符作为索引的数组来保存s中的字符对应的出现次数，如果当前字符出现次数为1则返回
     * 对应的索引
     */
    public int firstUniqChar(String s) {
        int[] freq = new int[26];
        char[] ch = s.toCharArray();
        for (char c : ch) {
            int i = c - 'a';
            freq[i]++;
        }
        for (int i = 0; i < s.length(); i++) {
            int i = ch[i] - 'a';
            if (freq[i] == 1) {
                return i;
            }
        }
        return -1;
    }

}
