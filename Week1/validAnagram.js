var isAnagram = function(s, t) {
    const hash = {};
   
    for ( const char of s ) {
      if ( !hash[char]) {
         hash[char] = 0
      }
   
      hash[char]++
    }
   
    for ( const char of t ) {
      if ( !hash[char ]) return false;
      hash[char]--
    }
   
    for ( const char in hash ) {
      if (hash[char] !== 0) return false;
    }
   
    return true;
   };
   
   //Time:O(N)
   //Space: O(N)