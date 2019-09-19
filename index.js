
// Here lies the palindrome checking function. Be amazed.

	// To be safe, let's convert the input to a string (incase an int is passed in)
	// now create an new empty string
	// then iterate through the original string, starting from the last letter and working backwards
	// at each index, add the letter to the empty string, eventually creating a reversed string
	// lastly compare the original string with the reversed string.
	// If they are equal, then the word is a palindrome and return true. Else false.

function isPalindrome() {
	var str = document.getElementById("userInput");
	str = str + '';
	var reverseString = '';
	for (var i = str.length-1; i >= 0; i--) { 
		reverseString = reverseString + str[i]; 
	}

	if (reverseString === str) {
		var node = document.createElement("LI");
		var textnode = document.createTextNode(str);
		// node.appendChild(textnode);
		document.getElementById("isPal").appendChild(node);
	} else {
		var node = document.createElement("LI");
		var textnode = document.createTextNode(str);
		// node.appendChild(textnode);
		document.getElementById("notPal").appendChild(node);
	}
}


// export { isPalindrome };
// Test the function here
// console.log(isPalindrome('dooode'));
// console.log(isPalindrome('racecar'));
// console.log(isPalindrome('taocat'));
// console.log(isPalindrome('anna'));
// console.log(isPalindrome('1oho1'));
// console.log(isPalindrome('hi ih'));
// console.log(isPalindrome('anna'));
// console.log(isPalindrome(10010));
// console.log(isPalindrome(101));
// console.log(isPalindrome('a'));
// console.log(isPalindrome('ab'));