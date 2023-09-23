/**
Ques- 
https://leetcode.com/problems/range-sum-of-bst/description/
938. Range Sum of BST
Given the root node of a binary search tree and two integers low and high, return the sum of values of all nodes with a value in the inclusive range [low, high]./**
https://www.geeksforgeeks.org/inorder-tree-traversal-without-recursion/
/**
 * 
 * 
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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    const inOrderTree=[]
    function inOrder(node){
        if (!(node==null)){
            inOrder(node.left);
            inOrderTree.push(node.val)
            inOrder(node.right);
        }
    }
    inOrder(root)
    console.log(inOrderTree)
    const sum= inOrderTree.reduce((accumulator, currentValue) =>{
        console.log(accumulator, currentValue)
        if (currentValue>= low && currentValue <= high){
            return accumulator+ currentValue
        }
        return accumulator
    }, 0);
    console.log(sum)
    return sum
};