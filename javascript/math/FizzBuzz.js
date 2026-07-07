/**
 * Given an integer n, return a string array answer (1-indexed) where:
 * answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
 * answer[i] == "Fizz" if i is divisible by 3.
 * answer[i] == "Buzz" if i is divisible by 5.
 * answer[i] == i (as a string) if none of the above conditions are true.
 * 
 * Example 1:
 * Input: n = 3
 * Output: ["1","2","Fizz"]
 * 
 * Constraints:
 * 1 <= n <= 10^4
 */

/**
 * 取余比加法操作效率更低，所以用加法替代取余可以提升运行效率
 */
var fizzBuzz = function(n) {
    let fb = [];

    for (let i = 1, i3 = 3, i5 = 5; i <= n; i++) {
        if (i == i3 && i == i5) {
            i3 += 3;
            i5 += 5;
            fb.push('FizzBuzz');
        } else if (i == i3) {
            i3 += 3;
            fb.push('Fizz');
        } else if (i == i5) {
            i5 += 5;
            fb.push('Buzz');
        } else {
            fb.push('' + i);
        }
    }

    return fb;
}

var main = function() {
    let n = 3;
    console.log('n: ' + n);
    console.log('arr: ' + fizzBuzz(n));
}

main();
