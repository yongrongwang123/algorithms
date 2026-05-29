/**
 * 706. Design HashMap
 *
 * Design a HashMap without using any built-in hash table libraries.
 * Implement the MyHashMap class:
 *  - MyHashMap() initializes the object with an empty map.
 *  - void put(int key, int value) inserts a (key, value) pair into the HashMap.
 *    If the key already exists in the map, update the corresponding value.
 *  - int get(int key) returns the value to which the specified key is mapped, or
 *    -1 if this map contains no mapping for the key.
 *  - void remove(key) removes the key and its corresponding value if the map contains
 *    the mapping for the key.
 *
 * Example 1:
 * Input
 * ["MyHashMap", "put", "put", "get", "get", "put", "get", "remove", "get"]
 * [[], [1, 1], [2, 2], [1], [3], [2, 1], [2], [2], [2]]
 * Output
 * [null, null, null, 1, -1, null, 1, null, -1]
 * 
 * Explanation
 * MyHashMap myHashMap = new MyHashMap();
 * myHashMap.put(1, 1); // The map is now [[1,1]]
 * myHashMap.put(2, 2); // The map is now [[1,1], [2,2]]
 * myHashMap.get(1);    // return 1, The map is now [[1,1], [2,2]]
 * myHashMap.get(3);    // return -1 (i.e., not found), The map is now [[1,1], [2,2]]
 * myHashMap.put(2, 1); // The map is now [[1,1], [2,1]] (i.e., update the existing value)
 * myHashMap.get(2);    // return 1, The map is now [[1,1], [2,1]]
 * myHashMap.remove(2); // remove the mapping for 2, The map is now [[1,1]]
 * myHashMap.get(2);    // return -1 (i.e., not found), The map is now [[1,1]]
 * 
 * Constraints:
 * 0 <= key, value <= 10^6
 * At most 10^4 calls will be made to put, get, and remove.
 */

package hashTable;

public class MyHashMap {
    int capacity;
    Node[] bucket;

    public static void main(String[] args) {
        int[][] arr = {{1,1},{2,2},{2,1}};
        MyHashMap map = new MyHashMap();
        System.out.println("put " + "(" + arr[0][0] + " " + arr[0][1] + ")");
        map.put(arr[0][0], arr[0][1]);
        System.out.println("put " + "(" + arr[1][0] + " " + arr[1][1] + ")");
        map.put(arr[1][0], arr[1][1]);
        System.out.println("get " + arr[0][0] + ": " + map.get(arr[0][0]));
        System.out.println("get 3: " + map.get(3));
        System.out.println("put " + "(" + arr[2][0] + " " + arr[2][1] + ")");
        map.put(arr[2][0], arr[2][1]);
        System.out.println("get " + arr[1][0] + ": " + map.get(arr[1][0]));
        System.out.println("remove " + arr[1][0]);
        map.remove(arr[1][0]);
        System.out.println("get " + arr[1][0] + ": " + map.get(arr[1][0]));
    }
    
    public MyHashMap() {
        capacity = 10000;
        bucket = new Node[capacity];
    }
    
    public void put(int key, int value) {
        int hash = hash(key);
        if (bucket[hash] == null) {
            bucket[hash] = new Node(key, value);
            return;
        }
        if (bucket[hash].key == key) {
            bucket[hash].value = value;
            return;
        }
        Node pre = bucket[hash];
        for (; pre.next != null; pre = pre.next) {
            if (pre.next.key == key) {
                pre.next.value = value;
                return;
            }
        }
        pre.next = new Node(key, value);
    }
    
    public int get(int key) {
        int hash = hash(key);
        if (bucket[hash] == null) {
            return -1;
        }
        for (Node cur = bucket[hash]; cur != null; cur = cur.next) {
            if (cur.key == key) {
                return cur.value;
            }
        }
        return -1;
    }
    
    public void remove(int key) {
        int hash = hash(key);
        if (bucket[hash] == null) {
            return;
        }
        if (bucket[hash].key == key) {
            bucket[hash] = bucket[hash].next;
            return;
        }
        for (Node pre = bucket[hash]; pre.next != null; pre = pre.next) {
            if (pre.next.key == key) {
                pre.next = pre.next.next;
                return;
            }
        }
    }
    
    private int hash(int key) {
        return key % capacity;
    }
}

class Node {
    int key;
    int value;
    Node next;

    public Node(int key, int value) {
        this.key = key;
        this.value = value;
    }
}
