// Assignment Code
var generateBtn = document.querySelector("#generate");
var clipboardBtn = document.querySelector("#clipboard");
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz".split("");
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numbers = "1234567890".split("");
var special = "!@#$%&*".split("");

var userChars = [];

// * series of confirms to determine what types of characters user wants to use
//etc



// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    
    passwordText.value = password;
    
}

function generatePassword () {
    var password = ""
    var setLength = prompt("How many characters would you like to include in the password? \n(Please enter a number between 8 and 128 characters)")
    if(setLength >= 8 && setLength <= 128) {

        var confirmNumbers = confirm("Do you want to use numbers?");
        var confirmUppercase = confirm("Do you want to use uppercase letters?");
        var confirmLowercase = confirm("Do you want to use lowercase letters?");
        var confirmSpecial = confirm ("Do you want to use special characters?");
        
    
           if (confirmNumbers) {
               userChars = [...userChars, ... numbers];
           }
           if (confirmUppercase) {
               userChars = [...userChars, ...uppercaseLetters];
               //confirmUppercase
           }
           if (confirmLowercase) {
               userChars = [...userChars, ...lowercaseLetters];
               //confirmSpecial
           }
           if (confirmSpecial) {
               userChars = [...userChars, ...special];
           }
           for(var i = 0; i<setLength; i++) {
               password = password + userChars[Math.floor(Math.random() * userChars.length)]
               
           }
           return password;
      
    } else {
        alert("Please enter a valid number between 8 and 128.")
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
