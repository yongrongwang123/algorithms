/**
 * 744. Find Smallest Letter Greater Than Target
 *
 * You are given an array of characters letters that is sorted in non-decreasing
 * order, and a character target. There are at least two different characters in
 * letters. Return the smallest character in letters that is lexicographically
 * greater than target. If such a character does not exist, return the first
 * character in letters.
 * 
 * Example 1:
 * Input: letters = ["c","f","j"], target = "a"
 * Output: "c"
 * 
 * Constraints:
 * 2 <= letters.length <= 10^4
 * letters[i] is a lowercase English letter.
 * letters is sorted in non-decreasing order.
 * letters contains at least two different characters.
 * target is a lowercase English letter.
 */

package binarySearch;

import java.util.Arrays;

public class NextGreatestLetter {

    public static void main(String[] args) {
        char[] letters = {'c', 'f', 'j'};
        char target = 'z';
        System.out.println("letters: " + Arrays.toString(letters));
        System.out.println("target: " + target);
        NextGreatestLetter n = new NextGreatestLetter();
        System.out.println("next letter: " + n.nextGreatestLetter(letters, target));
    }

    /**
     * 因为是环形的，所以右边界设置为n而不是n-1来避免取不到最后一个元素，如果中间的字符大于目标
     * 值，则搜索左半部分且包含中间的字符，否则搜索右半部分且不包含中间的字符，最后左右边界重合
     * 的时候跳出循环，返回结果之前需要对得到的索引取余
     */
    public char nextGreatestLetter(char[] letters, char target) {
        int n = letters.length;
        int left = 0;
        int right = n;
        while (left < right) {
            int mid = left + (right - left) / 2;
            if (letters[mid] <= target) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return letters[left % n];
    }

}
