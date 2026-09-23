/**
 * 118. Pascal's Triangle
 *
 * Given an integer numRows, return the first numRows of Pascal's triangle. In
 * Pascal's triangle, each number is the sum of the two numbers directly above it
 * as shown:
 *
 * Example 1:
 * Input: numRows = 5
 * Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
 *
 * Constraints:
 * 1 <= numRows <= 30
 */
package arrays;

import java.util.ArrayList;
import java.util.List;

public class Generate {

    public static void main(String[] args) {
        int numRows = 5;
        System.out.println("num rows: " + numRows);
        Generate g = new Generate();
        System.out.println("rows: " + g.generate(numRows));
    }

    /**
     * 循环利用每一行结果，每次先在最后添加1，然后从倒数第二个元素往前直到第二个元素，
     * 每个元素设置为该元素和前一个元素之和，最后复制这一行结果后加入数组
     */
    public List<List<Integer>> generate(int numRows) {
        List<List<Integer>> rows = new ArrayList<>();
        List<Integer> row = new ArrayList<>();
        for (int i = 1; i <= numRows; i++) {
            row.add(1);
            for (int j = i - 2; j >= 1; j--) {
                row.set(j, row.get(j) + row.get(j - 1));
            }
            rows.add(new ArrayList<>(row));
        }
        return rows;
    }

}
