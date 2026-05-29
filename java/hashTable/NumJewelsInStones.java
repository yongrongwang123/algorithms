/**
 * 771. Jewels and Stones
 *
 * You're given strings jewels representing the types of stones that are jewels, 
 * and stones representing the stones you have. Each character in stones is a type 
 * of stone you have. You want to know how many of the stones you have are also 
 * jewels. Letters are case sensitive, so "a" is considered a different type of 
 * stone from "A".
 * 
 * Example 1:
 * Input: jewels = "aA", stones = "aAAbbbb"
 * Output: 3
 * 
 * Constraints:
 * 1 <= jewels.length, stones.length <= 50
 * jewels and stones consist of only English letters.
 * All the characters of jewels are unique.
 */

package hashTable;

public class NumJewelsInStones {

    public static void main(String[] args) {
        String jewels = "aA";
        String stones = "aAAbbbb";
        System.out.println("jewels: " + jewels + ", stones: " + stones);
        NumJewelsInStones n = new NumJewelsInStones();
        System.out.println("number: " + n.numJewelsInStones(jewels, stones));
    }
    
    /**
     * 使用将字符作为索引的数组来统计字符串jewels中的字符在字符串stones中出现的次数
     */
    public int numJewelsInStones(String jewels, String stones) {
        int count = 0;
        int[] chars = new int[58];
        for (char c : jewels.toCharArray()) {
            int i = c - 'A';
            chars[i] = 1;
        }
        for (char c : stones.toCharArray()) {
            int i = c - 'A';
            if (chars[i] == 1) {
                count++;
            }
        }
        return count;
    }

}
