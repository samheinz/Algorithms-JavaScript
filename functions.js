function revStr(str){
    var resultStr = "";
    for(var i = str.length - 1; i >= 0; i--){
      resultStr += str[i];
    };
    return resultStr;
}

function revStr(str){
  var resultStr = [];
  for(var i = 0, len = str.length; i < str.length; i++){
    resultStr.push(str.charAt(len - i));
  }
  return resultStr.join("");
}

function canWinNim(num){
  return (num % 4 !== 0);
}

function singleNumber(arr){
  if(arr.length <= 1){return arr};
  var result;
  for(var i = 0; i < arr.length; i++){
    result = result ^ arr[i];
  }
  return result;
}

function getSum(num1, num2){
  while(num2 != 0){
    var num3 = num1 & num2;
    num1 = num1 ^ num2;
    num2 = num3 << 1;
  }
  return num1;
}

function addDigits(num){
  return (num - 1) % 9 + 1;
}

function findDiff(str1, str2){
	str1 = str1.split("").sort();
	str2 = str2.split("").sort();
	for(var i = 0; i < str2.length; i++){
		if( str2[i] !== str1[i]){return str2[i]}
	}
}

function moveZeroes(arr){
	var nonZeroIndex = 0;
	for(var i = 0; i < arr.length; i++){
		if(arr[i] !== 0){
			var temp = arr[i];
			arr[i] = arr[nonZeroIndex];
			arr[nonZeroIndex] = temp;
			nonZeroIndex ++;
		}
	}
	return arr;
}

function ransomNote(str1, str2){
	str1 = str1.split("");
	str2 = str2.split("");
	for(var i = 0; i < str1.length; i ++){
		if(str2.indexOf(str1[i]) !== -1){
			var letterIndex = str2.indexOf(str1[i]);
			str2.splice(letterIndex, 1);
		}
		else{
			return false
		}
	}
	return true;
}

function isAnagram(str1, str2){
    str1 = str1.split("").sort();
    str2 = str2.split("").sort();

    return str1 === str2;
}

function firstUnique(str){
  for(var i = 0; i <str.length; i++){
    if( str.indexOf(str[i], i + 1) === -1){ return str[i]}
  }
  return -1;
}

function majorityNumber(arr){
  arr = arr.sort();
  return arr[parseInt(arr.length/2)]
}

function containDuplicate(arr){
  for(var i = 0; i < arr.length; i++){
    if(arr.indexOf(arr[i], i + 1) !== -1){
      return true;
    }
  }
  return false;
}

function powerOfThree(num){
  while(num >= 3){
    if(num % 3 !== 0){
      break;
    }
    num /= 3;
  }
  return num === 1
}

function powerOfTwo(num){

  while(num >= 2){
    if(num % 2 !== 0){
      break;
    }
    num /= 2;
  }
  return num === 1
}

function reverseWords(str){
  if(str.length === 0 || str === null){return "Sorry, this doesn't work"}
  var arr = str.split(" ");
  var result = "";
  for(var i = arr.length - 1; i >= 0; i--){
    if(arr[i].length !== 0){
      result += " " + arr[i];
    }
  }
  return result.trim();
}

function reverseVowels(str){
  var strArr = str.split('');
  var vowels = ['a','e','i','o','u','A','E','I','O','U'];
  var indexArr = [];
  var charArr = [];
  var character;
  for(var i = 0; i < str.length; i++){
    character = strArr[i];

    if(vowels.indexOf(character) !== -1){
      charArr.push(character);
      indexArr.push(i);
    }
  }
  for(var j = 0; j < indexArr.length; j++){
    strArr[indexArr[j]] = charArr.pop();
  }
  return strArr.join('')
}

function addOne(arr){
	var index = arr.length -1;
	arr[index] = arr[index] +1;
	return arr;
}

function removeElement(arr, val){
  var result = [];
  for(var i = arr.length -1; i >= 0; i--){
    if(arr[i] !== val){
      result.push(arr[i]);
    }
  }
  return result.length;
}

function rob(arr){
	if(arr.length === 0){return 0}
	if(arr.length === 1){return arr[0]}

	var evenNum = 0;
	var oddNum = 0;

	for(var i = 0; i < arr.length; i++){
		if(i % 2 === 0){
			evenNum = Math.max(evenNum + arr[i], oddNum);
		}else{
			oddNum = Math.max(oddNum + arr[i], evenNum);
		}
	}
	return Math.max(evenNum, oddNum);
}

function removeDuplicates(arr){
	if(arr.length === 0 || arr === null){return -1}
	if(arr.length === 1){return arr[0]}

	var check = [];

	for(var i = arr.length -1; i >= 0; i--){
		if(check.indexOf(arr[i]) === -1){
			check.unshift(arr[i])
		}
	}
	return check;
}
