var twoSum = function(nums, target) {
    let numsComplement = []
    for(let i=0; i < nums.length; i++) {
        if(numsComplement.includes(nums[i])) {
            const complementIndex = numsComplement.indexOf(nums[i])
            return [complementIndex, i]
        }
        const complement = target - nums[i]
        numsComplement.push(complement)
    }
};
