// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];



// Function to prompt user for password options
function getPasswordOptions() {
  getPasswordNumber = prompt("Choose how many characters you would like your password to contain (10 - 64)")

  // //conditional in case user chooses number ouside of 10-64
  // if ( getPasswordOptions === 0-9 &&
  //      getPasswordOptions === 66){
  //     alert ("You must pick a number between 10 and 64!")
  //   }


  
  specialCharacters = confirm("Click OK to include special characters");
  numericCharacters = confirm("Click OK to include numbers");
  lowerCasedCharacters = confirm("Click OK to include lower case letters");
  upperCasedCharacters = confirm("Click OK to include upper case letters");
}

  //conditional in case no options were selected
    if (specialCharacters === false &&
        numericCharacters === false &&
        lowerCasedCharacters === false &&
        upperCasedCharacters === false) {
          alert ("At least one character type must be choosen!")
         
          console.log("no characters were choosen")
        }
      else {
        //if at least 1 char type choosen
        console.log ("at least one character type was choosen")
      }



// Function for getting a random element from an array
function Random(arr) {
  var randomCharacter = Math.floor(Math.random() * arr.length)
  var randomElement = arr[randomCharacter];
  return randomElement
}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();
  var result = [];
}
//store options as password is being concatenated
var results = [];

//array to store characters to include in password
var charactersChoosen = [];

//array to contain one of eact type of choosen character to make sure each will be used
var guaranteedUseOfCharacters = [];

//write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);




























// // Function to prompt user for password options
// function getPasswordOptions() {
//   var getPasswordNumber = prompt ("Choose how many characters you would like your password to contain (10 - 64)")


//   //conditional in case user chooses number ouside of 10-64
//   if ( getPasswordOptions === 1-9 &&
//        getPasswordOptions === 65){
//       alert ("You must pick a number between 10 and 64!")
//     }

//   var specialCharacters = confirm ("Click OK to include special characters");
//   var numericCharacters = confirm ("Click OK to include numbers");
//   var lowerCasedCharacters = confirm ("Click OK to include lower case letters");
//   var upperCasedCharacters = confirm ("Click OK to include upper case letters");

//   //conditional in case user clicks no to all options
//   if (  specialCharacters === false &&
//         numericCharacters === false &&
//         lowerCasedCharacters === false &&
//         upperCasedCharacters === false) {
//       alert ("You must have at least one type of character!")}

//   //password
//       var password = {
//         length: length,
//         specialCharacters: specialCharacters,
//         numericCharacters: numericCharacters,
//         lowerCasedCharacters: lowerCasedCharacters,
//         upperCasedCharacters: upperCasedCharacters
//       };
//       return password;
// } 

//   // Function for getting a randomElement from an array
// function getRandom(arr) {
//   var randomItem = Math.floor(Math.random() * arr.length)
//   var randomElement = arr[randomItem];

//   return randomElement
// }

// // Function to generate password with user input
// function generatePassword() {
//   var options = getPasswordOptions();
//   var result = [];
// }
// //store options as password is being concatenated
//   var results = [];

// //array to store characters to include in password
//   var charactersChoosen = [];

// //array to contain one of eact type of choosen character to make sure each will be used
//   var guaranteedUseOfCharacters = [];

// //write password to the #password input
//   function writePassword() {
//     var password = generatePassword();
//     var passwordText = document.querySelector('#password');
//     passwordText.value = password;
//   }


// // Get references to the #generate element
//   var generateBtn = document.querySelector('#generate');

//   // Write password to the #password input
//   function writePassword() {
//     var password = generatePassword();
//     var passwordText = document.querySelector('#password');

//     passwordText.value = password;
//   }


// // Add event listener to generate button
// generateBtn.addEventListener('click', writePassword);

// getPasswordOptions()



