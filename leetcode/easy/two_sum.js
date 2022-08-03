/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * (1) The hash table is initially empty and the first element in the array is 4. We simply put 4 into the hash table.
 *
 * (2) The next element is 5. We check to see if the sum minus the current element exists in the hash table. 6 - 5 = 1 does not exist in the hash table. So add 5 to the hash table.
 *
 * (3) The next element is 1. We check to see if the sum minus the current element exists in the hash table. 6 - 1 = 5 does exist in the hash table so we found a pair!
 */
function twoSum(nums, target) {
    const indices = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (complement in indices) {
            return [indices[complement], i]
        }

        indices[ nums[i] ] = i
    }
}
let nums = [4, 5, 1, 8]
let target = 6
console.log(twoSum(nums, target))

