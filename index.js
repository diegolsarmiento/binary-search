// Binary Search Trees are ideal for searching in big BALANCED trees.
// Balance mean the almost all node have left and right child.
// In a 4000 nodes tree, it only takes 12 steps to find the node.
// In Big O is LogN, which is really good for searching.
// Linked lists would need to check every node.
// Useful: Dictionary, Phone Book, Users (with ID)

function BST(value){
  this.value = value;
  this.left = null;
  this.right = null;
}

// No matter if we need to create the tree from scratch,
// or if ALREADY exists,
// WE NEED TO USE 'insert' to create the tree.
BST.prototype.insert = function(value) {
  if (value <= this.value){
    if (!this.left) this.left = new BST(value);
    else this.left.insert(value);
  }
  else if (value > this.value) {
    if (!this.right) this.right = new BST(value);
    else this.right.insert(value);
  }
}

// Search the "value" in ALL the tree
// AS LONG AS THE TREE WAS CREATED WITH 'insert'
BST.prototype.contains = function(value){
  if (value === this.value) return true;
  else if (value < this.value){
    if (!this.left) return false;
    else return this.left.contains(value);
  }
  else if (value > this.value){
    if (!this.right) return false;
    else return this.right.contains(value);
  }
}

// "In Order": We'll touch ALL of nodes, **** IN ORDER ****
// RECURSIVELY, we'll TOUCH every node in the tree,
// from LEAST to GREATEST
// 'in-order': Shows nodes in order
// 'pre-order': Parent node, then left branch, the right branch,
// PRE-ORDER: USEFULL TO MAKE A COPY OF THE TREE
// 'post-order': All left children, all right children, then parent
// POST-ORDER: SAFELY DELETE NODES FROM THE TREE

// ***************************
// ***** THIS FUNCTION TAKES A FUNCTION ******
// iteratorFunc is a Function
// This algorith goes down every branch
BST.prototype.depthFirstTraversal = function(iteratorFunc, order) {
  if (order === 'pre-order') iteratorFunc(this.value);
  if (this.left) this.left.depthFirstTraversal(iteratorFunc, order); //LEFT
  if (order === 'in-order') iteratorFunc(this.value);
  if (this.right) this.right.depthFirstTraversal(iteratorFunc, order); //RIGHT
  if (order === 'post-order') iteratorFunc(this.value);
}

// Breadth First: Level by level
// all first childs and sibblings
// -not like deep breadth first-
// Useful: Define a hierarchy or top level
BST.prototype.breadthFirstTraversal = function(iteratorFunc){
  var queue = [this];
  while (queue.length){
    var treeNode = queue.shift();
    iteratorFunc(treeNode);
    if (treeNode.left) queue.push(treeNode.left);
    if (treeNode.right) queue.push(treeNode.right);
  }
}

BST.prototype.getMinVal = function(){
  if (this.left) return this.left.getMinVal();
  else return this.value;
}

BST.prototype.getMaxVal = function(){
  if (this.right) return this.right.getMaxVal();
  else return this.value;
}

var bst = new BST(50);
bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);

//console.log(bst.contains(44));

// 'in-order': Shows nodes in order
// 'pre-order': Parent node, then left branch, the right branch,
// USEFULL TO MAKE A COPY OF THE TREE
//bst.depthFirstTraversal(log, 'post-order');

//bst.breadthFirstTraversal(log);

var min = bst.getMinVal();
var max = bst.getMaxVal();

function log(node){
  console.log(node.value);
}

