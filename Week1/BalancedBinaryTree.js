var isBalanced = function(root) {
  return height(root)[0];
};

const height = (root) => {
  if (!root) return [true, 0]
  const [ left, right ] = [ height(root.left), height(root.right) ]
  const equal = left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1;
  return [equal, 1 + Math.max(left[1], right[1])]
}

//Time O(N)
//Spaece O(N)