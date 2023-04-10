var invertTree = function(root) {
    if (!root) return null;
  
    swap(root, root.left, root.right)
    invertTree(root.left)
    invertTree(root.right)
  
    return root;
  };
  
  const swap = (node, left, right) => {
    const temp = right;
    node.right = left;
    node.left = temp;
  }
  
  //Time: O(N)
  //Space: O(N)