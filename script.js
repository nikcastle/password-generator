// Assignment Code
var generateBtn = document.querySelector("#generate");
var clipboardBtn = document.querySelector(#clipboard);
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz".split("");
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numbers = "1234567890".split("");
var special = "!@#$%&*".split("");

var userChars = [...letters, ...numbers];

// * series of confirms to determine what types of characters user wants to use
var setLength = prompt("How many characters would you like to inlcude in the password?")
var confirmNumbers = confirm("Do you want to use numbers?");
var confirmUppercase = confirm("Do you want to use uppercase letters?");
var confirmLowercase = confirm("Do you want to use lowercase letters?");
var confirmSpecial = confirm ("Do you want to use special characters?");
//etc

if (confirmNumbers) {
    userChars = [userChars, ... numbers];
}
if (confirmUppercase) {
    userChars = [userChars, ...numbers, ...uppercaseLetters];
    //confirmUppercase
}
if (confirmLowercase) {
    userChars = [userChars, ...numbers, ...uppercaseLetters, ...lowercaseLetters];
    //confirmSpecial
}
if (confirmSpecial) {
    userChars = [userChars, ...numbers, ... uppercaseLetters, ...lowercaseLetters, ...special];
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


  for(var i = 0; i<= ; i++) {
      password = password + values.charAt(Math.floor(Math.random() * userChars.length))

  }

}

function copyClipboard() {
    var copyText = document.getElementById("password")
    copyText.select();
    document.execCommand("copy");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
clipboardBtn.addEventListener("click", copyClipboard);
