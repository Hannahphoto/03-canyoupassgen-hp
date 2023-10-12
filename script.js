// Assignment Code
var generateBtn = document.querySelector("#generate");

// var userInput = function (){
  // randomUppercase
  // randomLowercase
  // randomNumbers 
  // randomspecChar
// }

  // if(userInput = randomLowercase){
    // (userInput)+(getPasswordLength)= passwordCriteria
  // }

  // if(UPPERCASECHAR === randomUppercase)
  // {}


// var passwordCriteria = userInput ();
// var userInput = () => password
// 
  // if(uppercase)
  // if(lowercase)
  // if(numbers)
  // if(specChar)
  

// / THEN my input should be validated and at least one character type should be 
// / selected

var UPPERCASECHAR = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
// var randomUppercase = uppercase(Math.floor(Math.random() * UPPERCASECHAR.length));

var lowercaseChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","z","y","z"]
// var randomLowercase = generatePassword(Math.floor(Math.random()* lowercaseChar.length));
// 
var numbersChar = ["0","1","2","3","4","5","6","7","8","9"]
// var randomNumbers = generatePassword(Math.floor(Math.random()*numbersChar.length));

var specCharChar = ["!","@","#","$","%","^","&","*","(",")","{","}","[","]","=","<",">","/",";"]
// var randomspecChar = generatePassword(Math.floor(Math.random()*specCharChar.length));


function generatePassword()
{
  // getPasswordLength is done-
  var getPasswordLength = () => {
    var length = window.prompt("How many characters will your password contain? Must be more than 8 and less than 128.")
    var MIN = 8;
    var MAX = 128;
    if(parseInt(length) && (length >= MIN && length <= MAX)){
        return parseInt(length);
    }
    return getPasswordLength();
  };

var charlength = getPasswordLength();
// if (!prompt)
// return;
var numbers = window.confirm("Click OK for your password to contain numbers.")
// if (!confirm)
// return;
var lowercase = window.confirm("Click OK for your password to contain a lowercase letter.")
// if (!confirm)
// return;
var uppercase = window.confirm("Click OK for your password to contain an uppercase letter.")
// if (!confirm)
// return;
var specChar = window.confirm("Click OK for your password to contain a special character.")

console.log(`length: ${charlength}\n numbers:${numbers}\n lowercase:${lowercase}\n uppercase: ${uppercase}\n specChar: ${specChar}`)

var passwordCriteria = [];
if(numbers){
  passwordCriteria = passwordCriteria.concat(numbersChar)
}
else {
  window.confirm("Selecting a number is required to generate the password.")
}
if(lowercase){
  passwordCriteria = passwordCriteria.concat(lowercaseChar)
}
else {
  window.confirm("Selecting an lowercase letter required to generate the password.")
}
if(uppercase){
  passwordCriteria = passwordCriteria.concat(UPPERCASECHAR)
}
else {
  window.confirm("Selecting an uppercase letter is required to generate the password.")
}
if(specChar){
  passwordCriteria = passwordCriteria.concat(specCharChar)
}
else {
  window.confirm("Selecting a special character is required to generate the password")
  return "";
}

var password = "";

for(var i = 0; i<charlength; i++){
  password += passwordCriteria[Math.floor(Math.random() * passwordCriteria.length)]
  console.log (i);

  //  for(var i = 0; i<uppercase; i++){
    // password += passwordCriteria[Math.floor(Math.random() * passwordCriteria.length)]
    // console.log (i);
}
// i=numbers, i=lowercase, i=uppercase,


return password

// for(var i = 0; i<numbers; i++){
  // password += passwordCriteria[Math.floor(Math.random() * passwordCriteria.length)]
  // console.log (i);
// }
// 
// for(var i = 0; i<lowercase; i++){
  // password += passwordCriteria[Math.floor(Math.random() * passwordCriteria.length)]
  // console.log (i);
// }
// 

}


// if(generatePassword === userInput){
  // console.log(password)}
// else{
  // console.log("Missing requirements for password")
// };

// 
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

  }

// }
// 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
// return document.userInput
// 
