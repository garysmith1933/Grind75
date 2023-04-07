var isPalindrome = function(s) {
    s = s.toLowerCase();
    const alphaNumerics = 'abcdefghijklmnopqrstuvwxyz0123456789'
    let left = 0;
    let right = s.length - 1;

    while ( left <= right ) {
      if ( !alphaNumerics.includes(s[left])) {
        left++;
        continue;
      }

      if ( !alphaNumerics.includes(s[right])) {
        right--;
        continue;
      }

      if ( s[left] !== s[right] ) return false;
      left++;
      right--;
    }

    return true;
};

//Time: O(N)
//Space: O(1)