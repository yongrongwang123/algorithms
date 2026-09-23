/**
 * 148. Implement Trie (Prefix Tree)
 *
 * A trie (pronounced as "try") or prefix tree is a tree data structure used to 
 * efficiently store and retrieve keys in a dataset of strings. There are various 
 * applications of this data structure, such as autocomplete and spellchecker.
 * Implement the Trie class:
 * - Trie() Initializes the trie object.
 * - void insert(String word) Inserts the string word into the trie.
 * - boolean search(String word) Returns true if the string word is in the trie 
 *   (i.e., was inserted before), and false otherwise.
 * - boolean startsWith(String prefix) Returns true if there is a previously inserted 
 *   string word that has the prefix prefix, and false otherwise.
 * 
 * Example 1:
 * Input
 * ["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
 * [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
 * Output
 * [null, null, true, false, true, null, true]
 * Explanation
 * Trie trie = new Trie();
 * trie.insert("apple");
 * trie.search("apple");   // return True
 * trie.search("app");     // return False
 * trie.startsWith("app"); // return True
 * trie.insert("app");
 * trie.search("app");     // return True
 * 
 * Constraints:
 * 1 <= word.length, prefix.length <= 2000
 * word and prefix consist only of lowercase English letters.
 * At most 3 * 10^4 calls in total will be made to insert, search, and startsWith.
 */

var TrieNode = function() {
    this.isWord = false;
    this.children = new Array(26);
};

var Trie = function() {
    this.root = new TrieNode();
};

/**
 * 遍历整个字符串，针对每个字符搜索trie，如果在当前节点的childre数组中没找到，则生成一个
 * 新节点并且将其加入到当前节点的children数组中，然后继续搜索trie
 */
Trie.prototype.insert = function(word) {
    let node = this.root;
    let child = null;
    let a = 'a'.charCodeAt(0);
    for (let c of word) {
        let j = c.charCodeAt(0) - a;
        child = node.children[j];
        node.children[j] = child ?? new TrieNode();
        node = node.children[j];
    }
    node.isWord = true;
};

Trie.prototype.search = function(word) {
    let node = this.find(word);
    return !!node && node.isWord;
};

Trie.prototype.startsWith = function(prefix) {
    return !!this.find(prefix);
};

/**
 * 遍历整个字符串，针对每个字符搜索trie，如果当前节点不为null则继续搜索trie，否则跳出循环
 */
Trie.prototype.find = function(word) {
    let node = this.root;
    let a = 'a'.charCodeAt(0);
    for (let i = 0; i < word.length && node; i++) {
        let j = word.charCodeAt(i) - a;
        node = node.children[j];
    }
    return node;
};

var main = function() {
    let strs = ['apple', 'app'];
    let trie = new Trie();
    console.log('insert: ' + strs[0]);
    trie.insert(strs[0]);
    console.log('search: ' + strs[0] + ': ' + trie.search(strs[0]));
    console.log('search: ' + strs[1] + ': ' + trie.search(strs[1]));
    console.log('starts with: ' + strs[1] + ': ' + trie.startsWith(strs[1]));
    trie.insert(strs[1]);
    console.log('search: ' + strs[1] + ': ' + trie.search(strs[1]));
};

main();
