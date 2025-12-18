/**
 * Given a sorted integer array arr, two integers k and x, return the k closest
 * integers to x in the array. The result should also be sorted in ascending order.
 * An integer a is closer to x than an integer b if:
 * |a - x| < |b - x|, or
 * |a - x| == |b - x| and a < b
 *
 * Example 1:
 * Input: arr = [1,2,3,4,5], k = 4, x = 3
 * Output: [1,2,3,4]
 *
 * Constraints:
 * 1 <= k <= arr.length
 * 1 <= arr.length <= 10^4
 * arr is sorted in ascending order.
 * -10^4 <= arr[i], x <= 10^4
 */

/**
 * 以mid到mid+k为一个滑动窗口，总共有k+1个元素，保证每次排除一个最左边或者最右边的元素后
 * 还有k个元素，观察x是在滑动窗口中点的左边还是右边，即对比x和(arr[mid]+arr[mid+k])/2，
 * 即对比x-arr[mid]和arr[mid+k]-x，也就是对比arr[mid]到arr[mid+k-1]和arr[mid+1]到
 * arr[mid+k]这两段，看谁更接近x，分为两种情况：
 * 1. x-arr[mid]<=arr[mid+k]-x，此时需要将滑动窗口向左滑动，滑动窗口最右边一个元素可以排除，
 * 下一次迭代的时候滑动窗口起始位置要包含mid
 * 2. x-arr[mid]>arr[mid+k]-x，此时需要将滑动窗口向右滑动，滑动窗口最左边一个元素可以排除，
 * 下一次迭代的时候滑动窗口起始位置不包含mid
 */
var findClosestElements = function(arr, k, x) {
    let left = 0;
    let right = arr.length - k;

    while (left < right) {
        let mid = Math.floor((right - left) / 2) + left;
        if (x - arr[mid] <= arr[mid + k] - x) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return arr.slice(left, left + k);
}

let arr = [1,2,3,4,5];
let k = 4;
let x = 3;
console.log('input array: ' + arr);
console.log('k: ' + k);
console.log('x: ' + x);
console.log('output array: ' + findClosestElements(arr, k, x));
