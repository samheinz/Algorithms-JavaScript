function isPermutation(str1, str2) {
	return str1.replace(/\s/g, '').split("").sort().join() === str2.replace(/\s/g, '').split("").sort().join();
}
