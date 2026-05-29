/**
 * 705. Design HashSet
 *
 * Design a HashSet without using any built-in hash table libraries.
 * Implement MyHashSet class:
 *  - void add(key) Inserts the value key into the HashSet.
 *  - bool contains(key) Returns whether the value key exists in the HashSet or not.
 *  - void remove(key) Removes the value key in the HashSet. If key does not exist
 *    in the HashSet, do nothing.
 * 
 * Example 1:
 * Input
 * ["MyHashSet", "add", "add", "contains", "contains", "add", "contains", "remove", "contains"]
 * [[], [1], [2], [1], [3], [2], [2], [2], [2]]
 * Output
 * [null, null, null, true, false, null, true, null, false]
 * 
 * Explanation
 * MyHashSet myHashSet = new MyHashSet();
 * myHashSet.add(1);      // set = [1]
 * myHashSet.add(2);      // set = [1, 2]
 * myHashSet.contains(1); // return True
 * myHashSet.contains(3); // return False, (not found)
 * myHashSet.add(2);      // set = [1, 2]
 * myHashSet.contains(2); // return True
 * myHashSet.remove(2);   // set = [1]
 * myHashSet.contains(2); // return False, (already removed)
 * 
 * Constraints:
 * 0 <= key <= 10^6
 * At most 10^4 calls will be made to add, remove, and contains.
 */

package hashTable;

public class MyHashSet {
    int capacity;
    Node[] bucket;

    public static void main(String[] args) {
        int[] arr = {1,2};
        MyHashSet set = new MyHashSet();
        System.out.println("add " + arr[0]);
        set.add(arr[0]);
        System.out.println("add " + arr[1]);
        set.add(arr[1]);
        System.out.println("contains " + arr[0] + ": " + set.contains(arr[0]));
        System.out.println("contains 3: " + set.contains(3));
        System.out.println("add " + arr[1]);
        set.add(arr[1]);
        System.out.println("contains " + arr[1] + ": " + set.contains(arr[1]));
        System.out.println("remove " + arr[1]);
        set.remove(arr[1]);
        System.out.println("contains " + arr[1] + ": " + set.contains(arr[1]));
    }
    
    public MyHashSet() {
        capacity = 10000;
        bucket = new Node[capacity];
    }
    
    public void add(int key) {
        int hash = hash(key);
        if (bucket[hash] == null) {
            bucket[hash] = new Node(key);
            return;
        }
        if (bucket[hash].key == key) {
            return;
        }
        Node pre = bucket[hash];
        for (; pre.next != null; pre = pre.next) {
            if (pre.next.key == key) {
                return;
            }
        }
        pre.next = new Node(key);
    }
    
    public boolean contains(int key) {
        int hash = hash(key);
        if (bucket[hash] == null) {
            return false;
        }
        for (Node cur = bucket[hash]; cur != null; cur = cur.next) {
            if (cur.key == key) {
                return true;
            }
        }
        return false;
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
    Node next;

    public Node(int key) {
        this.key = key;
    }
}
