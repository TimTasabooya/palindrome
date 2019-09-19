
// Here lies the palindrome checking function. Be amazed.

function isPalindrome(str) {
	var revStr = ''; // first create an empty string
	
	// then iterate through the original string, starting from the last letter and working backwards
	for (var i = str.length-1; i >= 0; i--) { 
		revStr = revStr + str[i]; // at each index, add the letter to the empty string, eventually creating a reversed string
	}
	// lastly compare the original string with the reversed string.
	// If they are equal, then the word is a palindrome and return true. Else false.
	return str === revStr;
}


console.log(isPalindrome('dooode'));