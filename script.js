
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page


// Assignment Code
var generateBtn = document.querySelector("#generate");

var userInput = function (){
  randomUppercase = document.getElementsByID("upper");
  randomLowercase = document.getElementsByID("lower");
  randomNumbers = document.getElementsByID("number");
  randomspecChar = document.getElementsByID("secChar");

  // if(userInput = randomLowercase){
    // (userInput)+(getPasswordLength)= passwordCriteria
  // }

  // if(UPPERCASECHAR === randomUppercase)
  // {}
}

// var passwordCriteria = userInput ();
// var userInput = () => password
// 
  // if(uppercase)
  // if(lowercase)
  // if(numbers)
  // if(specChar)
  

// / THEN my input should be validated and at least one character type should be 
// / selected

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
