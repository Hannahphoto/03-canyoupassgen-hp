// Assignment Code
var generateBtn = document.querySelector("#generate");

// variables for length- THEN I am presented with a series of prompts for
// password criteria. 
//promt user for 



var getRandomLower = function(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}
var getRandomUpper = function(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}
var getRandomNumber = function(){
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}
var getRandomSymbol = function(){
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)]
}


function generatePassword()
{
  window.prompt("How many characters will your password contain?")
if (!prompt)
return;
window.confirm("Click OK for your password to contain numbers")
if (!confirm)
return;
window.confirm("Click OK for your password to contain a lowercase letter.")
if (!confirm)
return;
window.confirm("Click OK for your password to contain an uppercase letter.")
if (!confirm)
return
window.confirm("Click OK for your password to contain a special character.")
if(!confirm)
return
if (confirm)
  writePassword
return 
}
// 
// prompt = Math.floor(Math.random)

// generatePassword = Math.floor(Math.random)
  // console.log(result);

// 
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

  // for (password){
    // [Math.floor(Math.random)]
  }


// 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

