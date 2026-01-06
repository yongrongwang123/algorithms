/**
 * A city's skyline is the outer contour of the silhouette formed by all the buildings
 * in that city when viewed from a distance. Given the locations and heights of all
 * the buildings, return the skyline formed by these buildings collectively.
 * The geometric information of each building is given in the array buildings where
 * buildings[i] = [left_i, right_i, height_i]:
 * left_i is the x coordinate of the left edge of the ith building.
 * right_i is the x coordinate of the right edge of the ith building.
 * height_i is the height of the ith building.
 * You may assume all buildings are perfect rectangles grounded on an absolutely
 * flat surface at height 0.
 * The skyline should be represented as a list of "key points" sorted by their
 * x-coordinate in the form [[x1,y1],[x2,y2],...]. Each key point is the left endpoint
 * of some horizontal segment in the skyline except the last point in the list, which
 * always has a y-coordinate 0 and is used to mark the skyline's termination where
 * the rightmost building ends. Any ground between the leftmost and rightmost buildings
 * should be part of the skyline's contour.
 * Note: There must be no consecutive horizontal lines of equal height in the output
 * skyline. For instance, [...,[2 3],[4 5],[7 5],[11 5],[12 7],...] is not acceptable;
 * the three lines of height 5 should be merged into one in the final output as such:
 * [...,[2 3],[4 5],[12 7],...]
 *
 * Example 1:
 * Input: buildings = [[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]]
 * Output: [[2,10],[3,15],[7,12],[12,0],[15,10],[20,8],[24,0]]
 * Explanation:
 * Figure A shows the buildings of the input. Figure B shows the skyline formed
 * by those buildings. The red points in figure B represent the key points in the
 * output list.
 *
 * Constraints:
 * 1 <= buildings.length <= 10^4
 * 0 <= left_i < right_i <= 2^31 - 1
 * 1 <= height_i <= 2^31 - 1
 * buildings is sorted by left_i in non-decreasing order.
 */

package queueStack;

import java.util.Arrays;
import java.util.List;
import java.util.ArrayList;
import java.util.Queue;
import java.util.PriorityQueue;
import java.util.Collections;
import arrays.ArrayUtils;

public class GetSkyline {

    public static void main(String[] args) {
        int[][] buildings = {{2,9,10},{3,7,15},{5,12,12},{15,20,10},{19,24,8}};
        ArrayUtils a = new ArrayUtils();
        a.print2dArray(buildings);
        GetSkyline g = new GetSkyline();
        List<List<Integer>> points = g.getSkyline(buildings);
        a.print2dArray(a.toArray(points));
    }

    /**
     * 用优先级队列来存储建筑的高度，为了区分建筑的左边界和右边界，将左边界的高度表示
     * 为负数，右边界的高度表示为正数，将图中的所有点按照先位置后高度进行排序，然后
     * 依次访问所有点，如果遇到左边界则将高度压入队列，如果遇到右边界则将高度弹出
     * 队列，如果队列中最大值发生了变化，则将此时队列中的最大高度加入到结果集合中
     */
    public List<List<Integer>> getSkyline(int[][] buildings) {
        List<List<Integer>> skylines = new ArrayList<List<Integer>>();
        List<List<Integer>> points = new ArrayList<List<Integer>>();

        for (int[] b : buildings) {
            points.add(Arrays.asList(b[0], -b[2]));
            points.add(Arrays.asList(b[1], b[2]));
        }
        Collections.sort(points, (a, b) -> {
            int n = a.get(0) - b.get(0);
            if (n != 0) {
                return n;
            }
            return a.get(1) - b.get(1);
        });

        Queue<Integer> pq = new PriorityQueue<Integer>((a, b) -> (b - a));
        pq.offer(0);
        int pre = 0;
        for (List<Integer> p : points) {
            int position = p.get(0);
            int height = p.get(1);
            if (height < 0) {
                pq.offer(-height);
            } else {
                pq.remove(height);
            }
            int cur = pq.peek();
            if (pre != cur) {
                skylines.add(Arrays.asList(position, cur));
                pre = cur;
            }
        }

        return skylines;
    }

}
