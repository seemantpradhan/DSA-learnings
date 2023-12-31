/**
Ques- https://leetcode.com/problems/search-in-a-binary-search-tree/description/
You are given the root of a binary search tree (BST) and an integer val.
Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.
/**
 * https://www.geeksforgeeks.org/binary-search-tree-set-1-search-and-insertion/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    if (root==null || root.val===val) {
      return root;
    }
    if (root.val < val){
      return searchBST (root.right, val)
    }
    else{
      return searchBST (root.left, val)
    }

};