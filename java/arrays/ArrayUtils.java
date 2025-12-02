package arrays;
import java.util.List;

public class ArrayUtils {
    public void printArray(int[] nums) {
        for (int i = 0; i < nums.length; i++) {
            System.out.print(nums[i] + " ");
        }
        System.out.println();
    }

    public void printArray2(double[] nums) {
        for (int i = 0; i < nums.length; i++) {
            System.out.print(nums[i] + " ");
        }
        System.out.println();
    }

    public void printArray3(char[] nums) {
        for (int i = 0; i < nums.length; i++) {
            System.out.print(nums[i] + " ");
        }
        System.out.println();
    }

    public void printArray(int[] nums, int n) {
        for (int i = 0; i < n; i++) {
            System.out.print(nums[i] + " ");
        }
        System.out.println();
    }

    public void print2dArray(int[][] nums) {
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] != null) {
                for (int j = 0; j < nums[i].length; j++) {
                    System.out.print(nums[i][j] + " ");
                }
            }
            System.out.println();
        }
        System.out.println();
    }

    public void print2dArray2(String[][] nums) {
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] != null) {
                for (int j = 0; j < nums[i].length; j++) {
                    System.out.print(nums[i][j] + " ");
                }
            }
            System.out.println();
        }
        System.out.println();
    }
    
    public void print2dArray3(char[][] nums) {
        for (int i = 0; i < nums.length; i++) {
            for (int j = 0; j < nums[i].length; j++) {
                System.out.print(nums[i][j] + " ");
            }
            System.out.println();
        }
        System.out.println();
    }

    public int[][] toArray(List<List<Integer>> lists) {
        int m = lists.size();
        int[][] arr = new int[m][];
        for (int i = 0; i < m; i++) {
            int n = lists.get(i).size();
            arr[i] = new int[n];
            for (int j = 0; j < n; j++) {
                arr[i][j] = lists.get(i).get(j);
            }
        }
        return arr;
    }

    public String[][] toArray2(List<List<String>> lists) {
        int m = lists.size();
        String[][] arr = new String[m][];
        for (int i = 0; i < m; i++) {
            int n = lists.get(i).size();
            arr[i] = new String[n];
            for (int j = 0; j < n; j++) {
                arr[i][j] = lists.get(i).get(j);
            }
        }
        return arr;
    }
}
