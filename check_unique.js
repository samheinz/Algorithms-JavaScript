function checkUnique(str){
	if (str.length > 128) return false;
	
	var arr = [];

	for(var i = 0; i < str.length; i++){
		var arr_value = str[i];
		if(arr[arr_value]) {
			return false;
		}
		arr[arr_value] = true;
	}
	return true;
}