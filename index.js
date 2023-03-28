function isPalindrome(word) {
  // Write your algorithm here
   // Convert the string to lowercase
   word = word.toLowerCase();
  
   // Reverse the string and compare it to the original
   for (let i = 0; i < word.length / 2; i++) {
     if (word[i] !== word[word.length - 1 - i]) {
       return false;
     }
   }
   
   return true;
}

/* 
  Add your pseudocode here
  intialize a string word as an argument
  convert to a lowercase
  write a loop to loop through each character
  write aa statement to check if the character are same
  return true or false

*/

/*
  Add written explanation of your solution here
  The function first converts the input string to lowercase using the toLowerCase() method, so that case doesn't affect whether the string is a palindrome or not.

Then, it loops through the string and compares each character to its corresponding character at the other end of the string (starting from the ends and working towards the middle). If any characters don't match, the function immediately returns false. If all characters match, the function returns true.

Note that this implementation assumes that the input string only contains letters, so it doesn't handle spaces, punctuation, or other special characters.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
