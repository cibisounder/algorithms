// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

var addList = (l, sumNode, carryOver) => {
  sumNode.next = {};
  sumNode = sumNode.next;
  sumNode.val = l.val + carryOver;
  carryOver = 0;

  if (sumNode.val >= 10) {
    sumNode.val -= 10;
    carryOver = 1;
  }

  l = l.next;
  if (l) {
    addList(l, sumNode, carryOver);
  } else if (carryOver) {
    sumNode.next = {};
    sumNode.next.val = 1;
  }
};

var addLists = (l1, l2, sumNode, carryOver) => {
  sumNode.next = {};
  sumNode = sumNode.next;
  sumNode.val = l1.val + l2.val + carryOver;
  carryOver = 0;

  if (sumNode.val >= 10) {
    sumNode.val -= 10;
    carryOver = 1;
  }

  l1 = l1.next;
  l2 = l2.next;

  if (l1 && l2) {
    addLists(l1, l2, sumNode, carryOver);
  } else if (l1) {
    addList(l1, sumNode, carryOver);
  } else if (l2) {
    addList(l2, sumNode, carryOver);
  } else if (carryOver) {
    sumNode.next = {};
    sumNode.next.val = 1;
  }
  return;
};

var addTwoNumbers = (l1, l2) => {
  var sumNode = {};
  var sumNodePtr = sumNode;
  var carryOver = 0;
  addLists(l1, l2, sumNode, carryOver);
  return sumNodePtr.next;
};
