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

function bubbleSort(arr) {
    var length = arr.length;
    for (var i = length - 1; i >= 0; i--) {
        for (var j = length - i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                var temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
            }
        }
    }
    return arr;
}
