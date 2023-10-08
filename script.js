// Assignment Code
var generateBtn = document.querySelector("#generate");
var generatePassword = function (){
  window.prompt("How many characters will your password contain?")
  if (!prompt)
  return;
  window.prompt("Your password will contain numbers?")
  if (!prompt)
  return;
  window.prompt("Your password will contain a lowercase letter?")
  if (!prompt)
  return;
  window.prompt("Your password will contain an uppercase letter?")
  if (!prompt)
  return
  window.prompt("Your password will contain a special character?")
  if(!prompt)
  return
  else (generatePassword)
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  for (var generatePassword){
    [Math.floor(Math.random)];
  }
  
  if (writePassword == generatePassword)
  
  return(password);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
