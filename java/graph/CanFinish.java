/**
 * 207. Course Schedule
 *
 * There are a total of numCourses courses you have to take, labeled from 0 to
 * numCourses - 1. You are given an array prerequisites where prerequisites[i] =
 * [ai, bi] indicates that you must take course bi first if you want to take course ai.
 * - For example, the pair [0, 1], indicates that to take course 0 you have to first
 *   take course 1.
 * Return true if you can finish all courses. Otherwise, return false.
 * 
 * Example 1:
 * Input: numCourses = 2, prerequisites = [[1,0]]
 * Output: true
 * Explanation: There are a total of 2 courses to take. 
 * To take course 1 you should have finished course 0. So it is possible.
 * 
 * Constraints:
 * 1 <= numCourses <= 2000
 * 0 <= prerequisites.length <= 5000
 * prerequisites[i].length == 2
 * 0 <= ai, bi < numCourses
 * All the pairs prerequisites[i] are unique.
 */

package graph;

import java.util.Arrays;
import java.util.List;
import java.util.ArrayList;
import java.util.Queue;
import java.util.LinkedList;
import java.util.Map;
import java.util.HashMap;

public class CanFinish {
    public static void main(String[] args) {
        int numCourses = 2;
        int[][] prerequisites = {{1,0}};
        System.out.println("courses: " + numCourses);
        System.out.println("prerequisites: " + Arrays.deepToString(prerequisites));
        CanFinish c = new CanFinish();
        System.out.println("finished: " + c.canFinish(numCourses, prerequisites));
    }

    /**
     * 用拓扑排序，首先将入度为0的顶点压入队列，然后每次从队列中弹出一个顶点，就将该顶点
     * 的相邻顶点入度减一，并将入度为0的相邻顶点压入队列，最后如果所有顶点都被压入过队列
     * 则返回 true
     */
    public boolean canFinish(int numCourses, int[][] prerequisites) {
        int count = 0;
        int[] degree = new int[numCourses];
        Queue<Integer> queue = new LinkedList<>();
        List<List<Integer>> graph = createGraph(numCourses, prerequisites, degree);
        for (int i = 0; i < degree.length; i++) {
            if (degree[i] == 0) {
                queue.offer(i);
            }
        }
        while (!queue.isEmpty()) {
            int cur = queue.poll();
            count++;
            for (int neighbor : graph.get(cur)) {
                degree[neighbor]--;
                if (degree[neighbor] == 0) {
                    queue.offer(neighbor);
                }
            }
        }
        return count == numCourses;
    }

    private List<List<Integer>> createGraph(int numCourses, int[][] prerequisites,
            int[] degree) {
        List<List<Integer>> graph = new ArrayList<>();
        for (int i = 0; i < numCourses; i++) {
            graph.add(new ArrayList<>());
        }
        for (int[] pre : prerequisites) {
            int v = pre[0];
            int u = pre[1];
            graph.get(u).add(v);
            degree[v]++;
        }
        return graph;
    }
}
