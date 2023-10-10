// Assignment Code
var generateBtn = document.querySelector("#generate");



var userInput = () => {
  if(randomUppercase)
  if(randomLowercase)
  if(randomNumbers)
  if(randomspecChar)
  console.log = password
}



var UPPERCASECHAR = function() {"A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z"}
var randomUppercase = UPPERCASECHAR(Math.floor(Math.random() * UPPERCASECHAR.length));

var lowercaseChar = function(){ "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,z,y,z"}
var randomLowercase = lowercaseChar(Math.floor(Math.random()* lowercaseChar.length));

var numbersChar = function(){"0,1,2,3,4,5,6,7,8,9"}
var randomNumbers = numbersChar(Math.floor(Math.random()*numbersChar.length));

var specCharChar = function() {"!,@,#,$,%,^,&,*,(,),{,},[,],=,<,>,/,;"}
var randomspecChar = specCharChar(Math.floor(Math.random()*specCharChar.length));


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

  }

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