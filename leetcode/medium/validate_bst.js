/*
In inorder the flow of traversing will be left_subtree -> current -> right_subtree.

Base case: we have to check whether the node is present or not, i.e. not NULL.
Traverse left the child with a recursive call passing the current->left as root.
After returning from this call, the node would be leftmost so that we can store this first node of the inorder traversal.
Now we have left child, and the root now makes a recursive call for the right subtree.
*/
function isValidBST(root) {
    if (!root) {
        return true;
    }

    function helper(root, min, max) {
        if (!root) {
            return true;
        }

        if ((min !== null && root.val <= min) || (max !== null && root.val >= max)) {
            return false; // current node's val doesn't satisfy the BST rules
        }

        // Continue to scan left and right
        return helper(root.left, min, root.val) && helper(root.right, root.val, max);
    }

    return helper(root, null, null);
}
let root = [2,1,3]
console.log(isValidBST(root))
