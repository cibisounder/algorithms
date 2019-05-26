// Find all triplets in array that add upto 0

/*
  @param {number[]} nums
  @return {number[][]}
 
*/

var areTripletsEqual = function(triplet1, triplet2) {
  for (i = 0; i < 3; i++) {
    if (triplet1[i] != triplet2[i]) {
      return false;
    }
  }
  return true;
};

var findTripletsWithNum = function(nums, sum, sumIndex) {
  var hash = {};
  var triplet = [];
  var triplets = [];
  for (var index = 0; index < nums.length; index++) {
    if (index == sumIndex) {
      // console.log(nums[index], ' cannot be included in triplet');
      continue;
    } else if (hash[sum - nums[index]]) {
      triplet = [];
      triplet.push(nums[hash[sum - nums[index]]]);
      triplet.push(nums[index]);
      triplet.push(-sum);
      triplet.sort();
      triplets.push(triplet);
      // console.log(triplet , 'has been pushed to', triplets);
      // console.log(triplets, 'is the current triplets state for the number', -sum);
    } else {
      hash[nums[index]] = index;
      // console.log(nums[index] , 'has been added to hash.');
      // console.log(hash, 'is the current hash state for the number', -sum);
    }
  }
  // console.log('returning triplets', triplets)
  return triplets;
};

var threeSum = function(nums) {
  var triplets = [];
  var isDuplicate = 0;
  var sortedNums = nums.sort();

  for (var index = 0; index < sortedNums.length; index++) {
    var tripletsWithNum = findTripletsWithNum(
      sortedNums,
      -1 * sortedNums[index],
      index
    );
    // console.log(tripletsWithNum, 'has been found for', sortedNums[index]);
    if (tripletsWithNum.length > 0) {
      for (var i = 0; i < tripletsWithNum.length; i++) {
        if (triplets.length == 0) {
          triplets.push(tripletsWithNum[i]);
          continue;
        }
        isDuplicate = 0;
        for (var j = 0; j < triplets.length; j++) {
          // console.log('comparing the triplets', tripletsWithNum[i], triplets[j]);
          if (areTripletsEqual(tripletsWithNum[i], triplets[j])) {
            isDuplicate = 1;
            break;
          }
        }
        if (!isDuplicate) {
          // console.log(tripletsWithNum[i], 'pushed to final triplet', triplets);
          triplets.push(tripletsWithNum[i]);
        }
      }
    }
  }
  return triplets;
};
