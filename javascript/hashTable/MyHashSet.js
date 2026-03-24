/**
 * Design a HashSet without using any built-in hash table libraries.
 * Implement MyHashSet class:
 * - void add(key) Inserts the value key into the HashSet.
 * - bool contains(key) Returns whether the value key exists in the HashSet or not.
 * - void remove(key) Removes the value key in the HashSet. If key does not exist in the HashSet, do nothing.
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
var Node = function(key) {
    this.key = key;
}

var MyHashSet = function() {
    this.capacity = 10000;
    this.bucket = new Array(this.capacity);
}

MyHashSet.prototype.add = function(key) {
    let hash = this.hash(key);
    if (!this.bucket[hash]) {
        this.bucket[hash] = new Node(key);
        return;
    }
    if (this.bucket[hash].key == key) {
        return;
    }
    let pre = this.bucket[hash];
    for (; pre.next; pre = pre.next) {
        if (pre.next.key == key) {
            return;
        }
    }
    pre.next = new Node(key);
}

MyHashSet.prototype.remove = function(key) {
    let hash = this.hash(key);
    if (!this.bucket[hash]) {
        return;
    }
    if (this.bucket[hash].key == key) {
        this.bucket[hash] = this.bucket[hash].next;
        return;
    }
    for (let pre = this.bucket[hash]; pre.next; pre = pre.next) {
        if (pre.next.key == key) {
            pre.next = pre.next.next;
            return;
        }
    }
}

MyHashSet.prototype.contains = function(key) {
    let hash = this.hash(key);
    if (!this.bucket[hash]) {
        return false;
    }
    for (let cur = this.bucket[hash]; cur; cur = cur.next) {
        if (cur.key == key) {
            return true;
        }
    }
    return false;
}

MyHashSet.prototype.hash = function(key) {
    return key % this.capacity;
}

let arr = [1,2];
let set = new MyHashSet();
console.log(`add ${arr[0]}`);
set.add(arr[0]);
console.log(`add ${arr[1]}`);
set.add(arr[1]);
console.log(`contains ${arr[0]}: ${set.contains(arr[0])}`);
console.log(`contains 3: ${set.contains(3)}`);
console.log(`add ${arr[1]}`);
set.add(arr[1]);
console.log(`contains ${arr[1]}: ${set.contains(arr[1])}`);
console.log(`remove ${arr[1]}`);
set.remove(arr[1]);
console.log(`contains ${arr[1]}: ${set.contains(arr[1])}`);
