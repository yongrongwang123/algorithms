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

package binaryTree;

import java.util.LinkedList;
import java.util.List;

public class Trie {
    private TrieNode root;

    public static void main(String[] args) {
        String[] strs = {"apple", "app"};
        Trie trie = new Trie();
        System.out.println("insert " + strs[0]);
        trie.insert(strs[0]);
        System.out.println("search " + strs[0] + ": " + trie.search(strs[0]));
        System.out.println("search " + strs[1] + ": " + trie.search(strs[1]));
        System.out.println("stats with " + strs[1] + ": " + trie.startsWith(strs[1]));
        trie.insert(strs[1]);
        System.out.println("search " + strs[1] + ": " + trie.search(strs[1]));
    }
    
    public Trie() {
        root = new TrieNode();
    }
    
    /**
     * 遍历整个字符串，针对每个字符搜索trie，如果在当前节点的childre数组中没找到，则生成一个
     * 新节点并且将其加入到当前节点的children数组中，然后继续搜索trie
     */
    public void insert(String word) {
        TrieNode node = root;
        TrieNode child = null;
        for (char c : word.toCharArray()) {
            int j = c - 'a';
            child = node.children[j];
            node.children[j] = (child != null ? child : new TrieNode());
            node = node.children[j];
        }
        node.isWord = true;
    }
    
    public boolean search(String word) {
        TrieNode node = find(word);
        return node != null && node.isWord;
    }
    
    public boolean startsWith(String prefix) {
        return find(prefix) != null;
    }
    
    /**
     * 遍历整个字符串，针对每个字符搜索trie，如果当前节点不为null则继续搜索trie，否则跳出循环
     */
    private TrieNode find(String word) {
        TrieNode node = root;
        char[] ch = word.toCharArray();
        for (int i = 0; i < ch.length && node != null; i++) {
            int j = ch[i] - 'a';
            node = node.children[j];
        }
        return node;
    }

}

class TrieNode {
    boolean isWord;
    TrieNode[] children;
    
    public TrieNode() {
        children = new TrieNode[26];
    }
}
