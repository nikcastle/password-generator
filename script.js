// Assignment Code
var generateBtn = document.querySelector("#generate");
var clipboardBtn = document.querySelector("#clipboard");
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz".split("");
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numbers = "1234567890".split("");
var special = "!@#$%&*".split("");

var userChars = [];

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    
    passwordText.value = password;
    
}

function generatePassword () {
    var password = ""
    // Prompt the user to enter a desired length for the password
    var setLength = prompt("How many characters would you like to include in the password? \n(Number of characters must be between 8 and 128)")
    if(setLength >= 8 && setLength <= 128) {
        
        // Series of confirms to determine what types of characters user wants to use
        var confirmNumbers = confirm("Do you want to use numbers?");
        var confirmUppercase = confirm("Do you want to use uppercase letters?");
        var confirmLowercase = confirm("Do you want to use lowercase letters?");
        var confirmSpecial = confirm ("Do you want to use special characters?");
        
        //If the user confirms the specified character, add it to the userChars array
           if (confirmNumbers) {
               userChars = [...userChars, ... numbers];
           }
           if (confirmUppercase) {
               userChars = [...userChars, ...uppercaseLetters];
           }
           if (confirmLowercase) {
               userChars = [...userChars, ...lowercaseLetters];
           }
           if (confirmSpecial) {
               userChars = [...userChars, ...special];
           }
           //For loop to determine random index of the previously set userChar array
           for(var i = 0; i<setLength; i++) {
               password = password + userChars[Math.floor(Math.random() * userChars.length)]
               
           }
           return password;
    //If the user does not enter a number between 8 and 128, prompt the user again to enter a number within that range
    } else {
        alert("Please enter a valid number between 8 and 128.")
    }
   }

//If user would like to copy to their clipboard, this function copies for them
function copyClipboard() {
    var copyText = document.getElementById("password")
    copyText.select();
    document.execCommand("copy");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
clipboardBtn.addEventListener("click", copyClipboard);
