var isValid = function(s) {
  // s can potentially have 1 length
  if (s.length < 2) return false;

  // object to keep track of opposite
  const closed = {
      ")" : "(",
      "]" : "[",
      "}" : "{"
  };

  // array to keep track of open brackets
  const open = [];

  for ( const bracket of s) {
      // if its a closing bracket
      if ( bracket in closed ) {
          //if the open bracket is not the first idx of the open array
          if (closed[bracket] !== open[open.length - 1]) return false;

          //else if it is, pop from open array
          open.pop()
              //return false
      }
      
      // if its not a closing bracket, add it to open
      else {
          open.push(bracket)
      }
  }

  return open.length === 0;
};


//Time: O(N) length of s
//Space: O(1)