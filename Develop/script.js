// Assignment Code
function generatePassword() {
  var possibleCharactersvar = [];
  var numbersvar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var uppercasevar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowercasevar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var specialCharactersvar = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

  //input and validate
  howManyCharatcers = prompt ('How many characters do you want your password to be? Choose bewteen 8-128 characters');
  if (howmanyCharatcers < 8 || howManyCharatcers > 128 ) {
    return "Please choose a valid number of characters";
  } else if (isNaN (howManyCharatcers)) {
    numberOfCharatcers = prompt("Please enter a valid number");
  } else {
    alert("Your password will be " + howManyCharatcers + " characters long.");
  }

 lowerCase = confirm('Would you like lowercase characters?');
  if (lowerCase) {
    var haveLowercase = ("Your password will have lowercase characters.");
  }
  else {
    alert haveLowercase("Your password will NOT have lowercase characters");
  }

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
