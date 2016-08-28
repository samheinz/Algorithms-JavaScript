function compressString(str){
	var compressed = "";
	var repeat_count = 0;
	var str_length = str.length;

	for(i = 0; i < str.length; i++){
		repeat_count += 1;
		if(i + 1 > str_length || str[i] != str[i+1]){
			compressed = compressed + str[i] + repeat_count
			repeat_count = 0
		}
	}
	return compressed;
}