function quicksort(arr){
	if(arr.length <= 1) return arr;

	var left = [];
	var right = [];
	var pivot_num = arr[-1];

	for(var i = 1; i < arr.length; i++){
	  if (arr[i] < pivot_num){
	  	left.push(arr[i]);
	  }
	  else{
	  	right.push(arr[i]);
	  }
	}
	
	return quicksort(left).concat(pivot_num, quicksort(right));
}
