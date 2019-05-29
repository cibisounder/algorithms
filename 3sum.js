var twoSum = function(nums, sum) {
  var hashMap = {};
  doublets = [];
  for (var num of nums) {
    if (hashMap[sum - num] == 1) {
      var doublet = [num, sum - num];
      doublets.push(doublet);
      hashMap[sum - num] = 2;
    } else if (!hashMap[sum - num]) {
      hashMap[num] = 1;
    }
  }
  return doublets;
};

var threeSum = function(nums) {
  var triplets = [];
  nums.sort();
  for (var index = 0; index < nums.length; index++) {
    if (index === 0 || nums[index] !== nums[index - 1]) {
      doublets = twoSum(nums.slice(index + 1), -nums[index]);
      for (var doublet of doublets) {
        doublet.push(nums[index]);
        triplets.push(doublet);
      }
    }
  }
  return triplets;
};
