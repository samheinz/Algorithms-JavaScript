function mergeSort(arr)
{
    if (arr.length < 2) return arr;
 
    var middle = Math.floor(arr.length / 2);
    var left   = arr.slice(0, middle);
    var right  = arr.slice(middle, arr.length);
    
    function merge(left, right){
      var result = [];
 
      while (left.length > 0 && right.length > 0) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
      }
      while (left.length) result.push(left.shift());
 
      while (right.length) result.push(right.shift());
 
      return result;
    }
 
  return merge(mergeSort(left), mergeSort(right));
}


