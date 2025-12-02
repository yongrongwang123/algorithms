var print2dArray = function(nums) {
    let m = nums.length;
    let n = nums[0].length;
    let str = '';
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            str += nums[i][j] + (j == n - 1 ? "\n" : " ");
        }
    }
    console.log(str);
}

export { print2dArray };
