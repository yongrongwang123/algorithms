/**
 * Given an object or array obj, return a compact object. A compact object is the
 * same as the original object, except with keys containing falsy values removed.
 * This operation applies to the object and any nested objects. Arrays are considered
 * objects where the indices are keys. A value is considered falsy when Boolean(value)
 * returns false. You may assume the obj is the output of JSON.parse. In other words,
 * it is valid JSON.
 * 
 * Example 1:
 * Input: obj = [null, 0, false, 1]
 * Output: [1]
 * Explanation: All falsy values have been removed from the array.
 * 
 * Constraints:
 * obj is a valid JSON object
 * 2 <= JSON.stringify(obj).length <= 10^6
 */

var compactObject = function(obj) {
    let obj2 = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        let value = obj[key];
        if (!value) {
            continue;
        }
        if (typeof value === 'object') {
            value = compactObject(value);
        }
        if (Array.isArray(obj)) {
            obj2.push(value);
        } else {
            obj2[key] = value;
        }
    }
    return obj2;
};

var main = function() {
    let obj = [null, 0, false, 1];
    console.log('input: ' + JSON.stringify(obj));
    console.log('output: ' + JSON.stringify(compactObject(obj)));
};

main();
