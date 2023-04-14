// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  let passwordLength = parseInt(prompt("How long should the password be? \nPlease enter a number between 8 and 128."));
  if (!passwordLength || passwordLength < 8 || passwordLength > 128) {
    alert("Error, invalid password length. \nPlease choose a password length greater than 8 and less than 128.");
    return "";
  }

  // Ask the user which characters to include
  var includeLowercase = confirm("Would you like to include lowercase letters?");
  var includeUppercase = confirm("Would you like to include uppercase letters?");
  var includeNumbers = confirm("Would you like to include numbers?");
  var includeSpCharacters = confirm("Would you like to include special characters?");

  // Validate types of characters
  if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpCharacters) {
    alert("Error, invalid character types. \nPlease include at least one type of character.");
    return "";
  }

  // Generate random password
  let passwordCharacters = [];
  const specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  const lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";


  if (includeSpCharacters) {
    passwordCharacters = passwordCharacters.concat(specialCharacters.split(""));
  }

  if (includeLowercase) {
    passwordCharacters = passwordCharacters.concat(lowercaseCharacters.split(""));
  }

  if (includeUppercase) {
    passwordCharacters = passwordCharacters.concat(uppercaseCharacters.split(""));
  }

  if (includeNumbers) {
    passwordCharacters = passwordCharacters.concat(numbers.split(""));
  }

  let results = "";
  for (var i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * passwordCharacters.length);
    let randomCharacter = passwordCharacters[randomIndex];
    results += randomCharacter;
  }

  // Return generated password
  return results;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Event listener to generate button
generateBtn.addEventListener("click", writePassword);
