var search = function(nums, target) {
    const half = Math.floor(nums.length/2)
    const middleNum = nums[half]
    const isLower = target < middleNum;

    console.log(half, middleNum)

    if (!isLower) {
        for ( let i = half; i < nums.length; i++) {
          const num = nums[i]
          if (num === target) return i;
        }

        return -1;
    } 
    
    else {
        for (let i = 0; i < half; i++) {
          const num = nums[i]
          if (num === target) return i;
        }

        return -1;
    }  
};