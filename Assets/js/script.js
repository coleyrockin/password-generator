// Assignment Code
function generatePassword() {
  var possibleCharactersvar = [];
  var numbersVar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var upperCasevar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowerCasevar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var specialCharactersvar = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

  //input and validate
  howManyCharacters = prompt ('How many characters do you want your password to be? Choose bewteen 8-128 characters');
  if (howManyCharacters < 8 || howManyCharacters > 128 ) {
    return "Please choose a valid number of characters";
  } else if (isNaN (howManyCharacters)) {
    numberOfCharatcers = prompt("Please enter a valid number");
  } else {
    alert("Your password will be " + howManyCharacters + " characters long.");
  }

 lowerCase = confirm('Would you like lowercase characters?');
  if (lowerCase) {
   alert ("Your password will have lowercase characters.");
  }
  else {
    alert ("Your password will NOT have lowercase characters");
  }

  upperCase = confirm("Do you want upercase characters?");
  if (upperCase) {
    alert("Your password will have uppercase characters");
  }
  else {
    alert("Your password will NOT have uppercase characters.");
  }

  numbers = confirm("Do you want to use numbers?");
  if (numbers) {
    alert("Your password will have numbers.");
  }
  else {
    alert("Your password will NOT have numbers.")
  }

  specialCharacters = confirm("Do you want special characters?");
  if (specialCharacters) {
    alert("Your password will have special characters.");
  }
  else {
    alert("Your password will NOT have spcecial characters.");
  }

  if (lowerCase === false && upperCase === false && numbers === false && specialCharacters === false ) {
    return "Please select at least one character type.";
  };

  if (lowerCase) {
    possibleCharactersvar = possibleCharactersvar.concat(lowerCasevar);
  }
  if (upperCase) {
  possibleCharactersvar = possibleCharactersvar.concat(upperCasevar);
  }
  if (numbers) {
    possibleCharactersvar = possibleCharactersvar.concat(numbersVar);
  }
  if (specialCharacters) {
    possibleCharactersvar = possibleCharactersvar.concat (specialCharactersvar);
  }

  let finalPassword = ""
  for (let i = 0; i < howManyCharacters; i++) {
    let rng = [Math.floor(Math.random() * possibleCharactersvar.length)];
    finalPassword = finalPassword + possibleCharactersvar[rng];
  }
    return finalPassword;
  };

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
