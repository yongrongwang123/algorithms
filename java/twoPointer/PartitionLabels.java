/**
 * 763. Partition Labels
 *
 * You are given a string s. We want to partition the string into as many parts as
 * possible so that each letter appears in at most one part. For example, the string
 * "ababcc" can be partitioned into ["abab", "cc"], but partitions such as ["aba", "bcc"]
 * or ["ab", "ab", "cc"] are invalid. Note that the partition is done so that after 
 * concatenating all the parts in order, the resultant string should be s. Return
 * a list of integers representing the size of these parts.
 * 
 * Example 1:
 * Input: s = "ababcbacadefegdehijhklij"
 * Output: [9,7,8]
 * Explanation:
 * The partition is "ababcbaca", "defegde", "hijhklij".
 * This is a partition so that each letter appears in at most one part.
 * A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits
 * s into less parts.
 * 
 * Constraints:
 * 1 <= s.length <= 500
 * s consists of lowercase English letters.
 */

package twoPointer;

import java.util.ArrayList;
import java.util.List;

public class PartitionLabels {
    public static void main(String[] args) {
        String s = "ababcbacadefegdehijhklij";
        System.out.println("s: " + s);
        PartitionLabels p = new PartitionLabels();
        System.out.println("partitions: " + p.partitionLabels(s));
    }

    /**
     * 用 map 结合两指针，从左往右遍历数组，首先记录每个字符最后一次出现的位置，然后用两
     * 个指针分别记录分区的起点和终点，分区的终点是分区内所有字符最后一次出现的位置，当
     * 到达分区终点的时候，就记录分区长度
     */
    public List<Integer> partitionLabels(String s) {
        List<Integer> list = new ArrayList<>();
        int[] index = new int[26];
        int start = -1;
        int end = 0;
        int n = s.length();
        char[] ch = s.toCharArray();
        for (int i = 0; i < n; i++) {
            int c = ch[i] - 'a';
            index[c] = i;
        }
        for (int i = 0; i < n; i++) {
            int c = ch[i] - 'a';
            end = (end >= index[c] ? end : index[c]);
            if (end == i) {
                list.add(end - start);
                start = end;
            }
        }
        return list;
    }
}
