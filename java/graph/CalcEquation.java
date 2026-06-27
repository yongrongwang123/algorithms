/**
 * You are given an array of variable pairs equations and an array of real numbers
 * values, where equations[i] = [A_i, B_i] and values[i] represent the equation
 * A_i / B_i = values[i]. Each A_i or B_i is a string that represents a single variable.
 * You are also given some queries, where queries[j] = [C_j, D_j] represents the jth
 * query where you must find the answer for C_j / D_j = ?. Return the answers to all
 * queries. If a single answer cannot be determined, return -1.0. Note: The input
 * is always valid. You may assume that evaluating the queries will not result in
 * division by zero and that there is no contradiction. Note: The variables that
 * do not occur in the list of equations are undefined, so the answer cannot be
 * determined for them.
 *
 * Example 1:
 * Input: equations = [["a","b"],["b","c"]], values = [2.0,3.0],
 * queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]
 * Output: [6.00000,0.50000,-1.00000,1.00000,-1.00000]
 * Explanation:
 * Given: a / b = 2.0, b / c = 3.0
 * queries are: a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ?
 * return: [6.0, 0.5, -1.0, 1.0, -1.0 ]
 * note: x is undefined => -1.0
 *
 * Constraints:
 * 1 <= equations.length <= 20
 * equations[i].length == 2
 * 1 <= A_i.length, B_i.length <= 5
 * values.length == equations.length
 * 0.0 < values[i] <= 20.0
 * 1 <= queries.length <= 20
 * queries[i].length == 2
 * 1 <= C_j.length, D_j.length <= 5
 * A_i, B_i, C_j, D_j consist of lower case English letters and digits.
 */

package graph;

import java.util.Map;
import java.util.HashMap;
import java.util.List;
import java.util.ArrayList;
import java.util.Set;
import java.util.HashSet;
import java.util.Arrays;
import arrays.ArrayUtils;

public class CalcEquation {

    public static void main(String[] args) {
        String[][] arr = {{"a","b"},{"b","c"}};
        double[] values = {2.0,3.0};
        String[][] arr2 = {{"a","c"},{"b","a"},{"a","e"},{"a","a"},{"x","x"}};
        CalcEquation c = new CalcEquation();
        ArrayUtils a1 = new ArrayUtils();
        System.out.println("equations");
        a1.print2dArray2(arr);
        System.out.println("queries");
        a1.print2dArray2(arr2);
        System.out.println("values");
        a1.printArray2(values);
        List<List<String>> equations = new ArrayList<>();
        List<List<String>> queries = new ArrayList<>();
        for (String[] a : arr) {
            equations.add(Arrays.asList(a[0], a[1]));
        }
        for (String[] a : arr2) {
            queries.add(Arrays.asList(a[0], a[1]));
        }
        double[] answers = c.calcEquation(equations, values, queries);
        System.out.println("answers");
        a1.printArray2(answers);
    }

    public double[] calcEquation(List<List<String>> equations, double[] values, List<List<String>> queries) {
        Map<String, Map<String, Double>> map = new HashMap<>();
        int n = queries.size();
        double[] answers = new double[n];
        for (int i = 0; i < values.length; i++) {
            String u = equations.get(i).get(0);
            String v = equations.get(i).get(1);
            double radio = values[i];
            map.putIfAbsent(u, new HashMap<>());
            map.putIfAbsent(v, new HashMap<>());
            map.get(u).put(v, radio);
            map.get(v).put(u, 1 / radio);
        }
        for (int i = 0; i < n; i++) {
            String start = queries.get(i).get(0);
            String end = queries.get(i).get(1);
            double answer = -1;
            if (map.containsKey(start) && map.containsKey(end)) {
                answer = helper(start, end, map, new HashSet<>());
            }
            answers[i] = answer;
        }
        return answers;
    }

    /**
     * 将字母作为顶点，数字作为权重，问题变成在有向图中判断两点是否相连，如果相连则
     * 返回路径上的权重之积，使用深度优先搜索遍历图来查找两点之间的路径
     */
    private double helper(String start, String end, Map<String, Map<String, Double>> map, Set<String> visited) {
        visited.add(start);
        Map<String, Double> neighbors = map.get(start);
        if (neighbors.containsKey(end)) {
            return neighbors.get(end);
        }
        for (String next : neighbors.keySet()) {
            if (visited.contains(next)) {
                continue;
            }
            double weight = helper(next, end, map, visited);
            if (weight != -1) {
                return weight * neighbors.get(next);
            }
        }
        return -1;
    }

}
