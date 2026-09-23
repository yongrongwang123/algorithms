/**
 * 146. LRU Cache
 *
 * Design a data structure that follows the constraints of a Least Recently Used
 * (LRU) cache. Implement the LRUCache class:
 * - LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
 * - int get(int key) Return the value of the key if the key exists, otherwise return -1.
 * - void put(int key, int value) Update the value of the key if the key exists.
 *   Otherwise, add the key-value pair to the cache. If the number of keys exceeds
 *   the capacity from this operation, evict the least recently used key.
 * The functions get and put must each run in O(1) average time complexity.
 * 
 * Example 1:
 * Input
 * ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
 * [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
 * Output
 * [null, null, null, 1, null, -1, null, -1, 3, 4]
 * 
 * Explanation
 * LRUCache lRUCache = new LRUCache(2);
 * lRUCache.put(1, 1); // cache is {1=1}
 * lRUCache.put(2, 2); // cache is {1=1, 2=2}
 * lRUCache.get(1);    // return 1
 * lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
 * lRUCache.get(2);    // returns -1 (not found)
 * lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
 * lRUCache.get(1);    // return -1 (not found)
 * lRUCache.get(3);    // return 3
 * lRUCache.get(4);    // return 4
 * 
 * Constraints:
 * 1 <= capacity <= 3000
 * 0 <= key <= 10^4
 * 0 <= value <= 10^5
 * At most 2 * 10^5 calls will be made to get and put.
 */

package linkedList;

import java.util.HashMap;
import java.util.Map;

public class LRUCache {
    int capacity;
    Map<Integer, Node> map;
    Node head;
    Node tail;

    public static void main(String[] args) {
        int[][] arr = {{1,1},{2,2},{3,3},{4,4}};
        LRUCache l = new LRUCache(2);
        System.out.println("put " + "(" + arr[0][0] + " " + arr[0][1] + ")");
        l.put(arr[0][0], arr[0][1]);
        System.out.println("put " + "(" + arr[1][0] + " " + arr[1][1] + ")");
        l.put(arr[1][0], arr[1][1]);
        System.out.println("get " + arr[0][0] + ": " + l.get(arr[0][0]));
        System.out.println("put " + "(" + arr[2][0] + " " + arr[2][1] + ")");
        l.put(arr[2][0], arr[2][1]);
        System.out.println("get " + arr[1][0] + ": " + l.get(arr[1][0]));
        System.out.println("put " + "(" + arr[3][0] + " " + arr[3][1] + ")");
        l.put(arr[3][0], arr[3][1]);
        System.out.println("get " + arr[0][0] + ": " + l.get(arr[0][0]));
        System.out.println("get " + arr[2][0] + ": " + l.get(arr[2][0]));
        System.out.println("get " + arr[3][0] + ": " + l.get(arr[3][0]));
    }

    /**
     * map 使搜索达到常量时间，双向链表使添加和删除达到常量时间，添加虚拟头节点和尾
     * 节点使插入和删除不需要判断链表为空，
     */
    public LRUCache(int capacity) {
        this.capacity = capacity;
        this.map = new HashMap<>();
        head = new Node(0, 0);
        tail = new Node(0, 0);
        head.next = tail;
        tail.prev = head;
    }
    
    /**
     * 如果节点存在 map，则先删除再插入该节点，这样可以保证该节点是最新节点
     */
    public int get(int key) {
        if (!map.containsKey(key)) {
            return -1;
        }
        Node node = map.get(key);
        remove(node);
        add(node);
        return node.value;
    }
    
    /**
     * 如果节点存在 map，则删除该节点，如果 map 大小超过指定容量，则删除头部节点，该节点是
     * 最老节点，最后添加新创建的节点
     */
    public void put(int key, int value) {
        if (map.containsKey(key)) {
            remove(map.get(key));
        }
        if (map.size() >= capacity) {
            remove(head.next);
        }
        add(new Node(key, value));
    }

    /**
     * 删除指定节点，并且将节点从 map 删除
     */
    private void remove(Node node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
        map.remove(node.key);
    }

    /**
     * 在尾部添加指定节点，该节点成为最新节点，并且将节点添加到 map
     */
    private void add(Node node) {
        node.prev = tail.prev;
        node.next = tail;
        tail.prev.next = node;
        tail.prev = node;
        map.put(node.key, node);
    }
}

class Node {
    int key;
    int value;
    Node prev;
    Node next;

    Node(int key, int value) {
        this.key = key;
        this.value = value;
    }
}
