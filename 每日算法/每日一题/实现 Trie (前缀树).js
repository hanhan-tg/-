// https://leetcode-cn.com/problems/implement-trie-prefix-tree/
var TrieNode = function () {
  this.next = {};
  this.isEnd = false;
};

/**
 * Initialize your data structure here.
 */
var Trie = function () {
  this.root = new TrieNode();
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  if (!word) return;
  let node = this.root;

  for (let i = 0; i < word.length; i++) {
    if (!node.next[word[i]]) {
      node.next[word[i]] = new TrieNode();
    }
    // 改行不放在if中就体现了前缀树的特点，共用前缀，而非对每个都申请新的空间
    // 如果放在if内，如果插入存在相同前缀的word，就不能公用了
    // 因为判断一个word是否存在是通过isEnd来判断，如果为true，说明有该word，否则为无
    node = node.next[word[i]];
  }
  node.isEnd = true;
  return true;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  if (!word) return;
  let node = this.root;
  for (let i = 0; i < word.length; i++) {
    if (node.next[word[i]]) {
      node = node.next[word[i]];
    } else {
      return false;
    }
  }
  return node.isEnd;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  if (!prefix) return;
  let node = this.root;
  for (let i = 0; i < prefix.length; i++) {
    if (node.next[prefix[i]]) {
      node = node.next[prefix[i]];
    } else {
      return false;
    }
  }
  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
