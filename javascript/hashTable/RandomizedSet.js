/**
 * Implement the RandomizedSet class:
 * RandomizedSet() Initializes the RandomizedSet object.
 * bool insert(int val) Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.
 * bool remove(int val) Removes an item val from the set if present. Returns true if the item was present, false otherwise.
 * int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.
* You must implement the functions of the class such that each function works in average O(1) time complexity.
* 
* Example 1:
* Input
* ["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]
* [[], [1], [2], [2], [], [1], [2], []]
* Output
* [null, true, false, true, 2, true, false, 2]
* Explanation
* RandomizedSet randomizedSet = new RandomizedSet();
* randomizedSet.insert(1); // Inserts 1 to the set. Returns true as 1 was inserted successfully.
* randomizedSet.remove(2); // Returns false as 2 does not exist in the set.
* randomizedSet.insert(2); // Inserts 2 to the set, returns true. Set now contains [1,2].
* randomizedSet.getRandom(); // getRandom() should return either 1 or 2 randomly.
* randomizedSet.remove(1); // Removes 1 from the set, returns true. Set now contains [2].
* randomizedSet.insert(2); // 2 was already in the set, so return false.
* randomizedSet.getRandom(); // Since 2 is the only number in the set, getRandom() will always return 2.
* 
* Constraints:
* -2^31 <= val <= 2^31 - 1
* At most 2 * 10^5 calls will be made to insert, remove, and getRandom.
* There will be at least one element in the data structure when getRandom is called.
 */

var RandomizedSet = function() {
    this.nums = [];
    this.numToIndex = {};
}

RandomizedSet.prototype.insert = function(val) {
    if (this.nums.includes(val)) {
        return false;
    }
    this.nums.push(val);
    this.numToIndex[val] = this.nums.length - 1;
    return true;
}

/**
 * 使用map来快速查找元素值对应的索引位置，如果待删除的元素不是最后一个元素，首先复制最后一
 * 个元素到待删除的元素且重新设置map中最后一个元素的索引位置，然后删除最后一个元素和map中
 * 待删除元素的索引位置
 */
RandomizedSet.prototype.remove = function(val) {
    if (!this.nums.includes(val)) {
        return false;
    }
    let last = this.nums.length - 1;
    let cur = this.numToIndex[val];
    if (cur != last) {
        let lastNum = this.nums[last];
        this.numToIndex[lastNum] = cur;
        this.nums[cur] = lastNum;
    }
    this.nums.pop();
    this.numToIndex[val] = null;

    return true;
}

RandomizedSet.prototype.getRandom = function() {
    let index = Math.floor(Math.random() * (this.nums.length));
    return this.nums[index];
}

let arr = [1, 2];
let r = new RandomizedSet();
console.log('insert ' + arr[0] + ': ' + r.insert(arr[0]));
console.log('remove ' + arr[1] + ': ' + r.remove(arr[1]));
console.log('insert ' + arr[1] + ': ' + r.insert(arr[1]));
console.log('random: ' + r.getRandom());
console.log('remove ' + arr[0] + ': ' + r.remove(arr[0]));
console.log('insert ' + arr[1] + ': ' + r.insert(arr[1]));
console.log('random: ' + r.getRandom());
