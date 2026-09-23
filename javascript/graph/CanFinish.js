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

/**
 * 用拓扑排序，首先将入度为0的顶点压入队列，然后每次从队列中弹出一个顶点，就将该顶点
 * 的相邻顶点入度减一，并将入度为0的相邻顶点压入队列，最后如果所有顶点都被压入过队列
 * 则返回 true
 */
var canFinish = function(numCourses, prerequisites) {
    let count = 0;
    let degree = new Array(numCourses).fill(0);
    let queue = [];
    let graph = createGraph(numCourses, prerequisites, degree);
    for (let i = 0; i < degree.length; i++) {
        if (!degree[i]) {
            queue.push(i);
        }
    }
    while (queue.length) {
        let cur = queue.shift();
        count++;
        for (let neighbor of graph[cur]) {
            degree[neighbor]--;
            if (!degree[neighbor]) {
                queue.push(neighbor);
            }
        }
    }
    return count == numCourses;
};

var createGraph = function(numCourses, prerequisites, degree) {
    let graph = [];
    for (let i = 0; i < numCourses; i++) {
        graph.push([]);
    }
    for (let pre of prerequisites) {
        let v = pre[0];
        let u = pre[1];
        graph[u].push(v);
        degree[v]++;
    }
    return graph;
};

var main = function() {
    let numCourses = 2;
    let prerequisites = [[1,0]];
    console.log('courses: ' + numCourses);
    console.log('prerequisites: ' + JSON.stringify(prerequisites));
    console.log('finished: ' + canFinish(numCourses, prerequisites));
};

main();
