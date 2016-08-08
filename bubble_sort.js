function bubbleSort(arr) {
	if(arr.length <= 1) return arr

	var switched;

	do {
		switched = false;
		for(var i = 0; i < arr.length - 1; i += 1) {
			if (arr[i] > arr[i + 1]) {
				var temp_var = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = temp_var;
				switched = true;
			}
		}
	} while(switched);

	return arr;
} 