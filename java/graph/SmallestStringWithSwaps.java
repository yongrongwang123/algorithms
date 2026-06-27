/**
 * You are given a string s, and an array of pairs of indices in the string pairs
 * where pairs[i] = [a, b] indicates 2 indices(0-indexed) of the string. You can
 * swap the characters at any pair of indices in the given pairs any number of times.
 * Return the lexicographically smallest string that s can be changed to after
 * using the swaps.
 *
 * Example 1:
 * Input: s = "dcab", pairs = [[0,3],[1,2]]
 * Output: "bacd"
 * Explaination: 
 * Swap s[0] and s[3], s = "bcad"
 * Swap s[1] and s[2], s = "bacd"
 *
 * Constraints:
 * 1 <= s.length <= 10^5
 * 0 <= pairs.length <= 10^5
 * 0 <= pairs[i][0], pairs[i][1] < s.length
 * s only contains lower case English letters.
 */

package graph;

import java.util.List;
import java.util.ArrayList;
import java.util.Map;
import java.util.HashMap;
import java.util.Collections;
import java.util.Arrays;
import arrays.ArrayUtils;

public class SmallestStringWithSwaps {

    public static void main(String[] args) {
        String s = "dcab";
        int[][] arr = {{0,3},{1,2}};
        List<List<Integer>> pairs = new ArrayList<>();
        for (int[] a : arr) {
            pairs.add(Arrays.asList(a[0], a[1]));
        }
        System.out.println("s: " + s);
        ArrayUtils a = new ArrayUtils();
        a.print2dArray(arr);
        SmallestStringWithSwaps s1 = new SmallestStringWithSwaps();
        System.out.println("output: " + s1.smallestStringWithSwaps(s, pairs));
    }

    /**
     * 可以互相交换的字符集合内部可以自由安排顺序，使用联合查找来处理不相交集问题，
     * 使用一组字符的最小索引作为键，该组字符作为值，每遇到一个字符空位，就从同一组
     * 字符里面取出最小的字符
     */
    public String smallestStringWithSwaps(String s, List<List<Integer>> pairs) {
        int n = s.length();
        UnionFind uf = new UnionFind(n);
        for (List<Integer> pair : pairs) {
            uf.union(pair.get(0), pair.get(1));
        }

        char[] chars = s.toCharArray();
        Map<Integer, ArrayList<Character>> map = new HashMap<>();
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < n; i++) {
            int root = uf.find(i);
            map.putIfAbsent(root, new ArrayList<Character>());
            map.get(root).add(chars[i]);
        }
        for (List<Character> list: map.values()) {
            Collections.sort(list, (a, b) -> (b - a));
        }
        for (int i = 0; i < n; i++) {
            List<Character> list = map.get(uf.find(i));
            sb.append(list.remove(list.size() - 1));
        }

        return sb.toString();
    }

}

class UnionFind {
    private int[] roots;
    private int[] ranks;

    public UnionFind(int size) {
        this.roots = new int[size];
        this.ranks = new int[size];
        for (int i = 0; i < size; i++) {
            roots[i] = i;
            ranks[i] = 1;
        }
    }

    public int find(int x) {
        for (; x != roots[x]; x = roots[x]) {
            roots[x] = roots[roots[x]];
        }
        return x;
    }

    public void union(int x, int y) {
        int rootX = find(x);
        int rootY = find(y);
        if (rootX != rootY) {
            if (ranks[rootX] > ranks[rootY]) {
                roots[rootY] = rootX;
            } else {
                roots[rootX] = rootY;
                if (ranks[rootX] == ranks[rootY]) {
                    ranks[rootY]++;
                }
            }
        }
    }

}
