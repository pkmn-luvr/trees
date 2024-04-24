/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    const helper = (node) => {
      if (!node) return 0;
      if (!node.left && !node.right) return 1;
      if (!node.left) return helper(node.right) + 1;
      if (!node.right) return helper(node.left) + 1;
      return Math.min(helper(node.left), helper(node.right)) + 1;
    };
    return helper(this.root);
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    const helper = (node) => {
      if (!node) return 0;
      return 1 + Math.max(helper(node.left), helper(node.right));
    };
    return helper(this.root);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    if (!this.root) return 0; // Handle empty tree case
    let maxSum = -Infinity;
    const findMaxSum = (node) => {
      if (!node) return 0;
      let left = Math.max(0, findMaxSum(node.left));
      let right = Math.max(0, findMaxSum(node.right));
      maxSum = Math.max(maxSum, node.val + left + right);
      return node.val + Math.max(left, right);
    };
    findMaxSum(this.root);
    return maxSum;
}

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(x) {
    let result = null;
    const helper = (node) => {
      if (!node) return;
      if (node.val > x) {
        if (result === null || node.val < result) result = node.val;
      }
      helper(node.left);
      helper(node.right);
    };
    helper(this.root);
    return result;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
