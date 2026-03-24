/**
 * Suppose Andy and Doris want to choose a restaurant for dinner, and they both 
 * have a list of favorite restaurants represented by strings. You need to help 
 * them find out their common interest with the least list index sum. If there is 
 * a choice tie between answers, output all of them with no order requirement. You 
 * could assume there always exists an answer.
 * 
 * Example 1:
 * Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], 
 * list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
 * Output: ["Shogun"]
 * Explanation: The only restaurant they both like is "Shogun".
 * 
 * Constraints:
 * 1 <= list1.length, list2.length <= 1000
 * 1 <= list1[i].length, list2[i].length <= 30
 * list1[i] and list2[i] consist of spaces ' ' and English letters.
 * All the stings of list1 are unique.
 * All the stings of list2 are unique.
 */

/**
 * 首先遍历list1，把其中的字符串和对应的索引保存到map中，然后遍历list2，如果当前字符串被
 * 包含在map中，则计算list1和list2中对应的索引之和，如果和小于之前保存的最小和则更新最
 * 小和且添加该字符串到结果中，如果等于之前保存的最小和则直接添加该字符串到结果中
 */
var findRestaurant = function(list1, list2) {
    let map = {};
    let list = [];
    let minSum = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < list1.length; i++) {
        map[list1[i]] = i;
    }
    for (let j = 0; j < list2.length; j++) {
        if (map[list2[j]] != undefined) {
            let i = map[list2[j]];
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

let list1 = ["Shogun","Tapioca Express","Burger King","KFC"];
let list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"];
console.log('input array1: ' + list1);
console.log('input array2: ' + list2);
console.log('output array: ' + findRestaurant(list1, list2));
