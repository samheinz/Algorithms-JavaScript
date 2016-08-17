function checkUnique(str){
	if (str.length > 128) return false;
	
	var arr = [];

	for(var i = 0; i < str.length; i++){
		var val = str[i];
		if(arr[val]) {
			return false;
		}
		else {
		  arr[val] = true;
	    }
	}
	return true;
}