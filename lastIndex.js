function lastIndexOf(arr, val) {
 
 
  for (let i = arr.length; i >= 0; i--) {
    if (arr[i] === val) {
      return i;                 
    } 
      
    }
    return -1; 
  }
 

console.log(lastIndexOf([5,5,5,5,0],5));
console.log(lastIndexOf([0,0,0,0,5,0],5));

console.log(lastIndexOf([0,0,0,0,5,0],2));