// Given an array of strings, group anagrams together.

// Example:

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]

class Solution {
    func groupAnagrams(_ strs: [String]) -> [[String]] {
    
        var hash = [String: [String]]()
        var anagramArray: [[String]] = []
        
        for str in strs {
            let key = String(str.sorted())
            if(hash[key] == nil) { 
                hash[key] = [str] 
            } else {
                hash[key]?.append(str)   
            }
        }
        
        for (_, value) in hash {
            anagramArray.append(value)
        }

        return anagramArray
    }
}