/**
 * Given an array nums with n objects colored red, white, or blue, sort them in-place
 * so that objects of the same color are adjacent, with the colors in the order
 * red, white, and blue. We will use the integers 0, 1, and 2 to represent the color
 * red, white, and blue, respectively. You must solve this problem without using
 * the library's sort function.
 *
 * Example 1:
 * Input: nums = [2,0,2,1,1,0]
 * Output: [0,0,1,1,2,2]
 *
 * Constraints:
 * n == nums.length
 * 1 <= n <= 300
 * nums[i] is either 0, 1, or 2.
 */

/**
 * 用 3 个指针 red, white, blue 来分区，red 指针之左用来存储红色对象，red 指针和 white
 * 指针之间用来存储白色对象，white 指针和 blue 指针之间用来存储未分类的对象，blue
 * 指针之右用来存储蓝色对象，将 white 指针从左往右移动，如果 white 指针所在元素为
 * 红色对象，则交换 red 指针和 white 指针所在元素，并且向右移动 red 指针和 white 指针，
 * 如果 white 指针所在元素为白色对象，则向右移动 white 指针，如果 white 指针所在
 * 元素为蓝色对象，则交换 white 指针和 blue 指针所在元素，并且向左移动 blue 指针
 */
var sortColors = function(nums) {
    let red = 0;
    let white = 0;
    let blue = nums.length - 1;

    while (white <= blue) {
        if (nums[white] == 0) {
            [nums[red], nums[white]] = [nums[white], nums[red]];
            red++;
            white++;
        } else if (nums[white] == 1) {
            white++;
        } else {
            [nums[white], nums[blue]] = [nums[blue], nums[white]];
            blue--;
        }
    }
}

let nums = [1,2,0];
console.log('input array: ' + nums);
sortColors(nums);
console.log('output array: ' + nums);
