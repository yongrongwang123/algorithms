var print2dArray = function(nums) {
    let str = '';
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]) {
            for (let j = 0; j < nums[i].length; j++) {
                str += nums[i][j] + ' ';
            }
        }
        str += '\n';
    }
    console.log(str);
}

export { print2dArray };
