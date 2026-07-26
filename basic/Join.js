/**
 * Given two arrays arr1 and arr2, return a new array joinedArray. All the objects
 * in each of the two inputs arrays will contain an id field that has an integer
 * value. joinedArray is an array formed by merging arr1 and arr2 based on their
 * id key. The length of joinedArray should be the length of unique values of id.
 * The returned array should be sorted in ascending order based on the id key. If
 * a given id exists in one array but not the other, the single object with that
 * id should be included in the result array without modification.
 * If two objects share an id, their properties should be merged into a single object:
 *  - If a key only exists in one object, that single key-value pair should be included
 *    in the object.
 *  - If a key is included in both objects, the value in the object from arr2 should
 *    override the value from arr1.
 * 
 * Example 1:
 * Input: 
 * arr1 = [{"id": 1, "x": 1}, {"id": 2, "x": 9}], 
 * arr2 = [{"id": 3, "x": 5}]
 * Output: 
 * [{"id": 1, "x": 1}, {"id": 2, "x": 9}, {"id": 3, "x": 5}]
 * Explanation: There are no duplicate ids so arr1 is simply concatenated with arr2.
 * 
 * Constraints:
 * arr1 and arr2 are valid JSON arrays
 * Each object in arr1 and arr2 has a unique integer id key
 * 2 <= JSON.stringify(arr1).length <= 10^6
 * 2 <= JSON.stringify(arr2).length <= 10^6
 */

var join = function(arr1, arr2) {
    let obj = {};
    for (let item of arr1) {
        obj[item.id] = item;
    }
    for (let item of arr2) {
        if (!obj[item.id]) {
            obj[item.id] = item;
        } else {
            Object.assign(obj[item.id], item);
        }
    }
    return Object.values(obj);
};

var main = function() {
    let arr1 = [{"id": 1, "b": {"b": 94},"v": [4, 3], "y": 48}];
    let arr2 = [{"id": 1, "b": {"c": 84}, "v": [1, 3]}];
    console.log('arr1: ' + JSON.stringify(arr1));
    console.log('arr2: ' + JSON.stringify(arr2));
    console.log('output: ' + JSON.stringify(join(arr1, arr2)));
};

main();
