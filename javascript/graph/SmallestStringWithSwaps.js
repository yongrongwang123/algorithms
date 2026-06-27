/**
 * You are given a string s, and an array of pairs of indices in the string pairs
 * where pairs[i] = [a, b] indicates 2 indices(0-indexed) of the string. You can
 * swap the characters at any pair of indices in the given pairs any number of times.
 * Return the lexicographically smallest string that s can be changed to after
 * using the swaps.
 *
 * Example 1:
 * Input: s = "dcab", pairs = [[0,3],[1,2]]
 * Output: "bacd"
 * Explaination: 
 * Swap s[0] and s[3], s = "bcad"
 * Swap s[1] and s[2], s = "bacd"
 *
 * Constraints:
 * 1 <= s.length <= 10^5
 * 0 <= pairs.length <= 10^5
 * 0 <= pairs[i][0], pairs[i][1] < s.length
 * s only contains lower case English letters.
 */
import { print2dArray } from '../arrays/ArrayUtils.js';

var UnionFind = function(size) {
    this.roots = new Array(size);
    this.ranks = new Array(size);
    for (let i = 0; i < size; i++) {
        this.roots[i] = i;
        this.ranks[i] = 1;
    }
}

UnionFind.prototype.find = function(x) {
    for (; x != this.roots[x]; x = this.roots[x]) {
        this.roots[x] = this.roots[this.roots[x]];
    }
    return x;
}

UnionFind.prototype.union = function(x, y) {
    let rootX = this.find(x);
    let rootY = this.find(y);
    if (rootX != rootY) {
        if (this.ranks[rootX] > this.ranks[rootY]) {
            this.roots[rootY] = rootX;
        } else {
            this.roots[rootX] = rootY;
            if (this.ranks[rootX] == this.ranks[rootY]) {
                this.ranks[rootY]++;
            }
        }
    }
}

/**
 * 可以互相交换的字符集合内部可以自由安排顺序，使用联合查找来处理不相交集问题，
 * 使用一组字符的最小索引作为键，该组字符作为值，每遇到一个字符空位，就从同一组
 * 字符里面取出最小的字符
 */
var smallestStringWithSwaps = function(s, pairs) {
    let n = s.length;
    let uf = new UnionFind(n);
    for (let pair of pairs) {
        uf.union(pair[0], pair[1]);
    }

    let map = {};
    let sb = '';
    for (let i = 0; i < n; i++) {
        let root = uf.find(i);
        map[root] = map[root] ? map[root] : [];
        map[root].push(s[i]);
    }
    for (let list of Object.values(map)) {
        list.sort((a, b) => (a > b ? -1 : 1));
    }
    for (let i = 0; i < n; i++) {
        let list = map[uf.find(i)];
        sb += list.pop();
    }

    return sb;
}

var main = function() {
    let s = "dcab";
    let pairs = [[0,3],[1,2]];
    console.log('s: ' + s);
    print2dArray(pairs);
    console.log('output: ' + smallestStringWithSwaps(s, pairs));
}

main();
