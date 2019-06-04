// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

// For example:
// Given binary tree [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7

// return its level order traversal as:

// [
//   [3],
//   [9,20],
//   [15,7]
// ]

var levelOrder = root => {
  if (!root) return [];

  let levelOrderArray = [[]];
  let bfsQueue = [root];
  let curLevelCounter = 1;
  let nextLevelCounter = 0;

  while (bfsQueue.length !== 0) {
    if (!curLevelCounter) {
      curLevelCounter = nextLevelCounter;
      nextLevelCounter = 0;
      levelOrderArray.push([]);
    }

    const node = bfsQueue.shift();
    levelOrderArray[levelOrderArray.length - 1].push(node.val);
    curLevelCounter--;

    if (node.left) {
      bfsQueue.push(node.left);
      nextLevelCounter++;
    }
    if (node.right) {
      bfsQueue.push(node.right);
      nextLevelCounter++;
    }
  }
  return levelOrderArray;
};
