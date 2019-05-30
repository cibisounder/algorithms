// Given a binary tree, return the inorder traversal of its nodes' values.

// Example:

// Input: [1,null,2,3]
//    1
//     \
//      2
//     /
//    3

// Output: [1,3,2]

var traverse = (node, traversalArray) => {
    if(!node) return;
    traverse(node.left, traversalArray);
    traversalArray.push(node.val);
    traverse(node.right, traversalArray);
} 

var inorderTraversal = (root) => {
    var traversalArray = []
    traverse(root, traversalArray);    
    return traversalArray;  
};