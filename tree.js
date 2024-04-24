/**
 * TREE DATA STRUCTURES: 
 * 
 *  - Mimic a hierarchical tree structure with a root value and children nodes that branch from it
 *
 */


class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */
  sumValues() {
    return this._sumValues(this.root);
  }

  _sumValues(node) {
    if (node === null) return 0;
    let total = node.val;
    for (let child of node.children) {
      total += this._sumValues(child);
    }
    return total;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */
  countEvens() {
    return this._countEvens(this.root);
  }

  _countEvens(node) {
    if (node === null) return 0;
    let count = node.val % 2 === 0 ? 1 : 0;
    for (let child of node.children) {
      count += this._countEvens(child);
    }
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */
  numGreater(lowerBound) {
    return this._numGreater(this.root, lowerBound);
  }

  _numGreater(node, lowerBound) {
    if (node === null) return 0;
    let count = node.val > lowerBound ? 1 : 0;
    for (let child of node.children) {
      count += this._numGreater(child, lowerBound);
    }
    return count;
  }
}

module.exports = { Tree, TreeNode };
