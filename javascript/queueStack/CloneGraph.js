/**
 * Given a reference of a node in a connected undirected graph. Return a deep copy 
 * (clone) of the graph. Each node in the graph contains a value (int) and a list 
 * (List[Node]) of its neighbors.
 * class Node {
 *     public int val;
 *     public List<Node> neighbors;
 * }
 * Test case format:
 * For simplicity, each node's value is the same as the node's index (1-indexed). 
 * For example, the first node with val == 1, the second node with val == 2, and 
 * so on. The graph is represented in the test case using an adjacency list. An 
 * adjacency list is a collection of unordered lists used to represent a finite 
 * graph. Each list describes the set of neighbors of a node in the graph.
 * The given node will always be the first node with val = 1. You must return the 
 * copy of the given node as a reference to the cloned graph.
 * 
 * Example 1:
 * Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
 * Output: [[2,4],[1,3],[2,4],[1,3]]
 * Explanation: There are 4 nodes in the graph.
 * 1st node (val = 1)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
 * 2nd node (val = 2)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
 * 3rd node (val = 3)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
 * 4th node (val = 4)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
 * 
 * Constraints:
 * The number of nodes in the graph is in the range [0, 100].
 * 1 <= Node.val <= 100
 * Node.val is unique for each node.
 * There are no repeated edges and no self-loops in the graph.
 * The Graph is connected and all nodes can be visited starting from the given node.
 */

var _Node = function (val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
}

var cloneGraph = function(node) {
    if (!node) {
        return null;
    }
    let map = new Map();
    return clone(node, map);
}

/**
 * 使用一个HashMap来保存访问过的节点，键为原来的节点，值为复制的节点，每当遇到一个没有访问
 * 过的节点，先复制原来的节点并加入到HashMap，然后递归遍历原来节点的邻节点
 */
var clone = function(node, map) {
    if (map.has(node)) {
        return map.get(node);
    }
    let newNode = new _Node(node.val);
    map.set(node, newNode);
    for (let neighbor of node.neighbors) {
        let newNeighbor = clone(neighbor, map);
        newNode.neighbors.push(newNeighbor);
    }
    return newNode;
}

var createGraph = function(arr) {
    let map = {};
    let node = null;

    for (let i = 0; i < arr.length; i++) {
        if (map[i + 1]) {
            node = map[i + 1];
        } else {
            node = new _Node(i + 1);
            map[i + 1] = node;
        }
        let neighbor = null;
        for (let j = 0; j < arr[i].length; j++) {
            if (map[arr[i][j]]) {
                neighbor = map[arr[i][j]];
            } else {
                neighbor = new _Node(arr[i][j]);
                map[arr[i][j]] = neighbor;
            }
            node.neighbors.push(neighbor);
        }
    }

    return node;
}

var putMap = function(val, node, map) {
    map[val] = node;
    for (let neighbor of node.neighbors) {
        if (!map[neighbor.val]) {
            putMap(neighbor.val, neighbor, map);
        }
    }
}

var printNeighbors = function(len, map) {
    let str = 'print neighbors:';
    for (let i = 0; i < len; i++) {
        let neighbors = map[i + 1].neighbors;
        str += '\n';
        for (let neighbor of neighbors) {
            str += neighbor.val + ' ';
        }
    }
    console.log(str);
}

var prettyMatrix = function(matrix) {
    return matrix.map(row => row.join(',')).join('\n');
}

let arr = [[2,4],[1,3],[2,4],[1,3]];
console.log('input array:\n' + prettyMatrix(arr));
let node = createGraph(arr);
let map = {};
putMap(arr.length, node, map);
printNeighbors(arr.length, map);
let newNode = cloneGraph(node);
let newMap = {};
putMap(arr.length, newNode, newMap);
printNeighbors(arr.length, newMap);
