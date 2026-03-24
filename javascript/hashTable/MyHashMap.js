/**
 * Design a HashMap without using any built-in hash table libraries.
 * Implement the MyHashMap class:
 * MyHashMap() initializes the object with an empty map.
 * void put(int key, int value) inserts a (key, value) pair into the HashMap. If the key already exists in the map, update the corresponding value.
 * int get(int key) returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
 * void remove(key) removes the key and its corresponding value if the map contains the mapping for the key.
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
var Node = function(key, value) {
    this.key = key;
    this.value = value;
}

var MyHashMap = function() {
    this.capacity = 10000;
    this.bucket = new Array(this.capacity);
}

MyHashMap.prototype.put = function(key, value) {
    let hash = this.hash(key);
    if (!this.bucket[hash]) {
        this.bucket[hash] = new Node(key, value);
        return;
    }
    if (this.bucket[hash].key == key) {
        this.bucket[hash].value = value;
        return;
    }
    let pre = this.bucket[hash];
    for (; pre.next; pre = pre.next) {
        if (pre.next.key == key) {
            pre.next.value = value;
            return;
        }
    }
    pre.next = new Node(key, value);
}

MyHashMap.prototype.get = function(key) {
    let hash = this.hash(key);
    if (!this.bucket[hash]) {
        return -1;
    }
    for (let cur = this.bucket[hash]; cur; cur = cur.next) {
        if (cur.key == key) {
            return cur.value;
        }
    }
    return -1;
}

MyHashMap.prototype.remove = function(key) {
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

MyHashMap.prototype.hash = function(key) {
    return key % this.capacity;
}

let arr = [[1,1],[2,2],[2,1]];
let map = new MyHashMap();
console.log(`put (${arr[0][0]} ${arr[0][1]})`);
map.put(arr[0][0], arr[0][1]);
console.log(`put (${arr[1][0]} ${arr[1][1]})`);
map.put(arr[1][0], arr[1][1]);
console.log(`get ${arr[0][0]}: ${map.get(arr[0][0])}`);
console.log(`get 3: ${map.get(3)}`);
console.log(`put (${arr[2][0]} ${arr[2][1]})`);
map.put(arr[2][0], arr[2][1]);
console.log(`get ${arr[1][0]}: ${map.get(arr[1][0])}`);
console.log(`remove ${arr[1][0]}`);
map.remove(arr[1][0]);
console.log(`get ${arr[1][0]}: ${map.get(arr[1][0])}`);
