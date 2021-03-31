// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 0 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lower-case English letters.


// Loop Solution 

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length == 0) return ""
    if(strs.length == 1) return strs[0]
    
    var longestCommonPrefix = strs[0]
    
    for (var string of strs) {
        var index = 0
        var prefix = ""
        
        while(index < Math.min(longestCommonPrefix.length, string.length)) {
            if(string[index] == longestCommonPrefix[index]) {
                prefix += string[index]
                index += 1
            } else {
                break
            }
        }
        
        longestCommonPrefix = prefix 
    }
    
    return longestCommonPrefix
}

// Trie Solution 
var trieAdd = function(string, trie) {
    var curMap = trie
    for(var char of string) {
        if(curMap.get(char) == null) {
            curMap.set(char, new Map())
        } 
        
        curMap = curMap.get(char)
    } 
    curMap.set("*", "*")
}

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let root = '*'
    var trie = new Map() 
    trie.set(root, new Map())
    var commonPrefix = ""
    var curTrie = trie.get(root) 
    var curKey = root
    
    for (var string of strs) {
        if(string == "") return string 
        trieAdd(string, curTrie)
    }
    
    while(curTrie != undefined && curTrie.size == 1 && curTrie.keys().next().value != "*") {
        curKey = curTrie.keys().next().value
        commonPrefix += curKey
        curTrie = curTrie.get(curKey)
    }
    
    return commonPrefix
};
