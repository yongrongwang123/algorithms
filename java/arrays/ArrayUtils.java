package arrays;

import java.util.ArrayList;
import java.util.List;

public class ArrayUtils {
    public void print2dArray(int[][] nums) {
        int m = nums.length;
        int n = nums[0].length;
        String str = "";
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                str += nums[i][j] + (j == n - 1 ? "\n" : " ");
            }
        }
        System.out.println(str);
    }
    
    public void print2dArray2(char[][] nums) {
        int m = nums.length;
        int n = nums[0].length;
        String str = "";
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                str += nums[i][j] + (j == n - 1 ? "\n" : " ");
            }
        }
        System.out.println(str);
    }

    public List<Integer> toList(int[] nums) {
        List<Integer> list = new ArrayList<>();
        for (int num : nums) {
            list.add(num);
        }
        return list;
    }
}
