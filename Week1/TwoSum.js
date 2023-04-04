var twoSum = function(nums, target) {
    //hashmap to keep track of numbers visited
    const map = {};

    for ( let i = 0; i < nums.length; i++ ) {
        const num = nums[i];
        //find the missing number = target - number
        const otherNum = target - num;

        // if the missing number is in the hashmap
        if (otherNum in map) {
            //return the value of the missing number from the map, which is its index
            // and return the current index we are on via its own array
            return [ map[otherNum], i ];
        }
        
        // else we add to the map, number, index
        map[num] = i;
    }   
};

//Time: O(N) N is length of nums
//Space: O(N) hashmap