/**
 * 599. Minimum Index Sum of Two Lists
 *
 * Given two arrays of strings list1 and list2, find the common strings with the
 * least index sum. A common string is a string that appeared in both list1 and list2.
 * A common string with the least index sum is a common string such that if it appeared
 * at list1[i] and list2[j] then i + j should be the minimum value among all the
 * other common strings. Return all the common strings with the least index sum.
 * Return the answer in any order.
 * 
 * Example 1:
 * Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], 
 * list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
 * Output: ["Shogun"]
 * Explanation: The only common string they both like is "Shogun".
 * 
 * Constraints:
 * 1 <= list1.length, list2.length <= 1000
 * 1 <= list1[i].length, list2[i].length <= 30
 * list1[i] and list2[i] consist of spaces ' ' and English letters.
 * All the stings of list1 are unique.
 * All the stings of list2 are unique.
 * There is at least a common string between list1 and list2.
 */

/**
 * 首先遍历list1，把其中的字符串和对应的索引保存到map中，然后遍历list2，如果当前字符串被
 * 包含在map中，则计算list1和list2中对应的索引之和，如果和小于之前保存的最小和则更新最
 * 小和且添加该字符串到结果中，如果等于之前保存的最小和则直接添加该字符串到结果中
 */
var findRestaurant = function(list1, list2) {
    let map = new Map();
    let list = [];
    let n1 = list1.length;
    let n2 = list2.length;
    let minSum = n1 + n2;
    for (let i = 0; i < n1; i++) {
        map.set(list1[i], i);
    }
    for (let j = 0; j < n2; j++) {
        if (map.get(list2[j]) != undefined) {
            let i = map.get(list2[j]);
            if (i + j <= minSum) {
                if (i + j < minSum) {
                    list = [];
                    minSum = i + j;
                }
                list.push(list2[j]);
            }
        }
    }
    return list;
}

var main = function() {
    let list1 = ["Shogun","Tapioca Express","Burger King","KFC"];
    let list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"];
    console.log('list1: ' + list1);
    console.log('list2: ' + list2);
    console.log('list: ' + findRestaurant(list1, list2));
}

main();
