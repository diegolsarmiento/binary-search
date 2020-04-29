// Binary Search Trees are ideal for searching in big BALANCED trees.
// Balance mean the almost all node have left and right child.
// In a 4000 nodes tree, it only takes 12 steps to find the node.
// In Big O is LogN, which is really good for searching.
// Linked lists would need to check every node.
// Useful: Dictionary, Phone Book, Users (with ID)

class BST {
  constructor(value){
    this.value = value;
    this.right = null;
    this.left = null;
  }
  
  insert(value){
   if(value === null) {
     return false;
   } 
    
   if(value < this.value){
    if(!this.left) {
      this.left = new BST(value);
    } else {
     this.left.insert(value); 
    }
   }
    
   if(value > this.value){
    if(!this.right) {
      this.right = new BST(value);
    } else {
      this.right.insert(value);
    }
   }
    
  }
  
  contains(value){ 
    if (value === this.value){
      return true;
    } else if (value < this.value){
      // left side
     if(!this.left){
      return false; 
     } else {
      return this.left.contains(value); 
     }
    } else if (value > this.value){
      // right side
     if(!this.right){
      return false; 
     } else {
      return this.right.contains(value); 
     }
    }
  }
  
  // "In Order": We'll touch ALL of nodes, **** IN ORDER ****
  // RECURSIVELY, we'll TOUCH every node in the tree,
  // from LEAST to GREATEST
  // PRE-ORDER: USEFULL TO MAKE A COPY OF THE TREE <----
  // POST-ORDER: SAFELY DELETE NODES FROM THE TREE <----

  // ***** THIS FUNCTION TAKES A LOG FUNCTION ******
  // iteratorFunc is a Function
  // This algorith goes down every branch
 depthFirstTraversal(iteratorFunc, order){
   if (order === 'pre-order') iteratorFunc(this.value); // Parent node, then left branch, the right branch,
   if (this.left) this.left.depthFirstTraversal(iteratorFunc, order); // If left exists, keep going
   if (order === 'in-order') iteratorFunc(this.value);  // Show nodes in oder
   if (this.right) this.right.depthFirstTraversal(iteratorFunc, order);  // If right exists, keep going
   if (order === 'post-order') iteratorFunc(this.value); // All left children, all right children, then parent
 }
 
  // Breadth First: Level by level
  // all first childs and sibblings
  // -not like deep breadth first-
  // Useful: Define a hierarchy or top level 
  breadthFirstTraversal(iteratorFunc){
   let queue = [this];
   while(queue.length){
     let treeNode = queue.shift();
     iteratorFunc(treeNode);
     if(treeNode.left) queue.push(treeNode.left);
     if(treeNode.right) queue.push(treeNode.right);
   }
 }

 // iteratorFunc
 log(node){
  console.log(node);
 }
  
  getMinVal(){
    if(this.left){
      return this.left.getMinVal();
    } else {
      return this.value;
    }
  }
  
  getMaxVal(){
    if(this.right){
      return this.right.getMaxVal();
    } else {
      return this.value;
    }
  }
}

let bst = new BST(50);
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


// bst.depthFirstTraversal(bst.log, 'pre-order');
// bst.breadthFirstTraversal(bst.log);
bst.log(bst.getMinVal());
bst.log(bst.getMaxVal());
