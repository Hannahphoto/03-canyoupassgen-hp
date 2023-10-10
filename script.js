// Assignment Code
var generateBtn = document.querySelector("#generate");

// variables for length- THEN I am presented with a series of prompts for
// password criteria. 
//promt user for 

// function = validate(){}
// const resultEl = document.getElementById("result");
// const lengthEl = document.getElementById("length");
// const lowercaseEl = document.getElementById("lowercase");
// const uppercaseEl = document.getElementById("uppercase");
// const numbersEl = document.getElementById("numbers");
// const symbolsEl = document.getElementById("symbols");
// const generateEl = document.getElementById("generate");
// 
// const passRulesFunc = {
  // lower: getRandomLower, upper: getRandomUpper, number: getRandomNumber, symbol: getRandomSymbol
// };
// 


var UPPERCASECHAR ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return UPPERCASECHAR(Math.floor(Math.random));

var lowercase = "abcdefghijklmnopqrstuvwzyz";
return lowercase(Math.floor(Math.random));

var numbers = "0123456789";
  return numbers(Math.floor(Math.random));

var specChar = "!@#$%^&*(){}[]=<>/;"
  return specChar(Math.floor(Math.random));



function generatePassword()
{
  var getPasswordLength = () => {
    var length = window.prompt("How many characters will your password contain?")
    var MIN = 8;
    var MAX = 128;
    if(parseInt(length) && (length >= MIN && length <= MAX)){
        return parseInt(length);
    }
    getPasswordLength();
  };

var charlength = getPasswordLength();
// if (!prompt)
// return;
var numbers = window.confirm("Click OK for your password to contain numbers")
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

var passwordCriteria = '';


if(numbers) {
  console.log('user wants numbers');
}
if(lowercase){
  console.log("lowercase valid")
}
if(uppercase){

}
if(specChar){

}
// if(!confirm)
// return;
// if (confirm)
  // writePassword
// return "";
// 
}



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

// let generatePassword = '';
// const typesCount = lower + upper + number + symbol;
// const typesArr = [{lower}, {upper}, {number}, {symbol}]
// 
// for(let i = 0; i < length; i += typesCount){
  // typesArr.forEach(type => {
  // const passRulesFunc = Object.keys(type [0])
  // console.log("passRulesFunc", passRulesFunc);
  // 
  // generatePassword += passRulesFunc;
  // })
// }
// 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
  // const length = +lengthEl.value;
  // const hasLower = lowercaseEl.value;
  // const hasUpper = uppercaseEl.value;
  // const hasNumber = numbersEl.value;
  // const hasSymbol = symbolsEl.value;

  // resultEl.innertext = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)

// });



