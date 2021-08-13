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

//console.log(specialCharacters[8]);
/* for (var i = 0; i < specialCharacters.length; i++) {
   console.log("Special character: " + specialCharacters[i])
 }
 */

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
]; 
/*
for (var i = 0; i < numericCharacters.length; i++) {
  console.log("numeric character: " + numericCharacters[i])
}
*/

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

//console.log(lowerCasedCharacters[2])
/*
for (var i = 0; i < lowerCasedCharacters.length; i++){
  console.log("lower cased character: " + lowerCasedCharacters[i])
}
*/

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A', 
  'B', 
  'C', 
  'D', 
  'E', 
  'F', 
  'G', 
  'H', 
  'I', 
  'J', 
  'K', 
  'L', 
  'M', 
  'N', 
  'O', 
  'P', 
  'Q', 
  'R', 
  'S', 
  'T', 
  'U', 
  'V', 
  'W', 
  'X', 
  'Y', 
  'Z'
];
/*
for (var i = 0; i < upperCasedCharacters.length; i++){
  console.log("upper cased character: " + upperCasedCharacters[i])
}
*/

// Function to prompt user for password options
function getPasswordOptions() {
  // How many characters
    //user input comes back as a string
    var length = parseInt(prompt ("Choose how many characters, between 10 and 64, that you would like your password to contain?")
    );

  // Which character type(s) for password
  // boolean variables: true or false answer returned from user
  var specialCharacters = confirm ("Click OK to include special characters");
  var numericCharacters = confirm ("Click OK to include numbers");
  var lowerCasedCharacters = confirm ("Click OK to include lower case letters");
  var upperCasedCharacters = confirm ("Click OK to include upper case letters");
  
  // Password object to store input
  var password = {
    length: length,
    specialCharacters: specialCharacters,
    numericCharacters: numericCharacters,
    lowerCasedCharacters: lowerCasedCharacters,
    upperCasedCharacters: upperCasedCharacters
  };
  return password;
}

function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randomElement = arr[randIndex];
  return randomElement;
}


// // Function to generate password with user input
// function generatePassword() {
//   var PasswordOptions = getPasswordOptions();
//   var results = [];
// }
//generate random password 
function generatePassword() {
  var options = getPasswordOptions();

  
  //array to store password options
  var result = [];
  //array to store characters to include in password
  var charactersPossible = [];
  //array to store one of each of character choosen
  var guaranteedUseOfCharacters = [];

  //cond statement adds array of special char into array of possiple password based on user input
  if (options.specialCharacters) {
    charactersPossible = charactersPossible.concat(specialCharacters);
    guaranteedUseOfCharacters.push(getRandom(specialCharacters));  
  }

  //cond statement adds array of numeric into array of possible password based on user
  if (options.numericCharacters) {
    charactersPossible = charactersPossible.concat(numericCharacters);
    guaranteedUseOfCharacters.push(getRandom(numericCharacters));
  }

  //cond statement adds array of lowercase into array of possible password based on user input
  if (options.lowerCasedCharacters) {
    charactersPossible = charactersPossible.concat(lowerCasedCharacters);
    guaranteedUseOfCharacters.push(getRandom(lowerCasedCharacters));
  }

  //cond statement adds array of uppercase characters into array of possible password based on user input
  if (options.upperCasedCharacters) {
    charactersPossible = charactersPossible.concat(upperCasedCharacters);
    guaranteedUseOfCharacters.push(getRandom(upperCasedCharacters));
  }

  //Function for getting a random element from an array
  // function getRandom(arr) {
  //   for (var i = 0; i < specialCharacters.length; i++);
  //   for (var i = 0; i < numericCharacters.length; i++);
  //   for (var i = 0; i < lowerCasedCharacters.length; i++);
  //   for (var i = 0; i < upperCasedCharacters.length; i++);
  // }
  // for (var i = 0; i < lowerCasedCharacters.length; (Math.random() * lowerCasedCharacters)) {
  //   console.log(lowerCasedCharacters);
  // }
  for (var i = 0; i < options.length; i++) {
    var charactersPossible = getRandom(charactersPossible);

    result.push(charactersPossible);
    }

  //put in at least one character of each in password
  for (var i = 0; i < guaranteedUseOfCharacters.length; i++) {
    result[i] = guaranteedUseOfCharacters[i];
  }


  //put results into string
  return result.join('');
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
//   getPasswordNumber = prompt("Choose how many characters you would like your password to contain (10 - 64)")

//   // //conditional in case user chooses number ouside of 10-64
//   // if ( getPasswordOptions === 0-9 &&
//   //      getPasswordOptions === 66){
//   //     alert ("You must pick a number between 10 and 64!")
//   //   }


  
//   specialCharacters = confirm("Click OK to include special characters");
//   numericCharacters = confirm("Click OK to include numbers");
//   lowerCasedCharacters = confirm("Click OK to include lower case letters");
//   upperCasedCharacters = confirm("Click OK to include upper case letters");
// //}

//   //conditional in case no options were selected
//     if (specialCharacters === false &&
//         numericCharacters === false &&
//         lowerCasedCharacters === false &&
//         upperCasedCharacters === false) {
//           alert ("At least one character type must be choosen!")
         
//           console.log("no characters were choosen")
//         };
     
//     //password
//     var password = {
//       length: length,
//       specialCharacters: specialCharacters,
//       numericCharacters: numericCharacters,
//       lowerCasedCharacters: lowerCasedCharacters,
//       upperCasedCharacters: upperCasedCharacters
//     };
//     return password;
// }


// // Function for getting a random element from an array
// function Random(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
// }








// function Random(arr) {
//   var randomCharacter = Math.floor(Math.random() * arr.length)
//   var randomElement = arr[randomCharacter];
//   return randomElement
// }

// // Function to generate password with user input
// function generatePassword() {
//   var options = getPasswordOptions();
//   var result = [];
// }
// //store options as password is being concatenated
// var results = [];

// //array to store characters to include in password
// var charactersChoosen = [];

// //array to contain one of eact type of choosen character to make sure each will be used
// var guaranteedUseOfCharacters = [];

// //write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector('#password');
//   passwordText.value = password;
// }

// // Get references to the #generate element
// var generateBtn = document.querySelector('#generate');

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector('#password');

//   passwordText.value = password;
// }

// Add event listener to generate button
// generateBtn.addEventListener('click', writePassword);






























// //   //conditional in case user chooses number ouside of 10-64
// //   if ( getPasswordOptions === 1-9 &&
// //        getPasswordOptions === 65){
// //       alert ("You must pick a length between 10 and 64!")
// //     }
// //   if (length < 10) {
//          alert("password must be at a length of at least 10")
//    }

// //   //conditional in case user clicks no to all options
// //   if (  specialCharacters === false &&
// //         numericCharacters === false &&
// //         lowerCasedCharacters === false &&
// //         upperCasedCharacters === false) {
// //       alert ("You must have at least one type of character!")}

// //   //password
// //       var password = {
// //         length: length,
// //         specialCharacters: specialCharacters,
// //         numericCharacters: numericCharacters,
// //         lowerCasedCharacters: lowerCasedCharacters,
// //         upperCasedCharacters: upperCasedCharacters
// //       };
// //       return password;
// // } 

// //   // Function for getting a randomElement from an array
// // function getRandom(arr) {
// //   var randomItem = Math.floor(Math.random() * arr.length)
// //   var randomElement = arr[randomItem];

// //   return randomElement
// // }

// // // Function to generate password with user input
// // function generatePassword() {
// //   var options = getPasswordOptions();
// //   var result = [];
// // }
// // //store options as password is being concatenated
// //   var results = [];

// // //array to store characters to include in password
// //   var charactersChoosen = [];

// // //array to contain one of eact type of choosen character to make sure each will be used
// //   var guaranteedUseOfCharacters = [];

// // //write password to the #password input
// //   function writePassword() {
// //     var password = generatePassword();
// //     var passwordText = document.querySelector('#password');
// //     passwordText.value = password;
// //   }


// // // Get references to the #generate element
// //   var generateBtn = document.querySelector('#generate');

// //   // Write password to the #password input
// //   function writePassword() {
// //     var password = generatePassword();
// //     var passwordText = document.querySelector('#password');

// //     passwordText.value = password;
// //   }


// // // Add event listener to generate button
// // generateBtn.addEventListener('click', writePassword);

// // getPasswordOptions()



