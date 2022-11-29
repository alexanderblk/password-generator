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
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

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

// User Input Variables
var confirmLower;
var confirmUpper;
var confirmNum;
var confirmChar;

// Choices variable that will be concatenated
var userChoices;

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

generateBtn.addEventListener('click', function () {
  getPasswordOptions();
});

var passLength;

// Function to prompt user for password options
function getPasswordOptions() {
  passLength = parseInt(prompt("Please choose a password\r\nYour password needs to have at least 10 characters and no more than 64"));
  if (passLength >= 10 && passLength <= 64) {
    charTypes();
  }
  else if (passLength <= 10) {
    alert("Password is too short !");
    getPasswordOptions();
  }
  else if (passLength >= 64) {
    alert("Password is too long !");
    getPasswordOptions();
  }
}

function charTypes() {
  confirmLower = confirm("Do you want lowercase letters in your password?");
  confirmUpper = confirm("Do you want uppercase letters in your password?");
  confirmNum = confirm("Do you want numbers in your password?");
  confirmChar = confirm("Do you want special characters in your password?");
  if (!confirmLower && !confirmUpper && !confirmNum && !confirmChar) {
    userChoices = alert("You must choose a criteria!");
    getPasswordOptions();
  }
  // All Types Selected
  else if (confirmLower && confirmUpper && confirmNum && confirmChar) {
    userChoices = lowerCasedCharacters.concat(upperCasedCharacters, numericCharacters, specialCharacters);
  }

  // 3 Types Selected
  else if (confirmLower && confirmUpper && confirmNum) {
    userChoices = lowerCasedCharacters.concat(upperCasedCharacters, numericCharacters);
  }
  else if (confirmLower && confirmUpper && confirmChar) {
    userChoices = lowerCasedCharacters.concat(upperCasedCharacters, specialCharacters);
  }
  else if (confirmLower && confirmNum && confirmChar) {
    userChoices = lowerCasedCharacters.concat(numericCharacters, specialCharacters);
  }
  else if (confirmUpper && confirmNum && confirmChar) {
    userChoices = upperCasedCharacters.concat(numericCharacters, specialCharacters);
  }

  // 2 Types Selected
  else if (confirmLower && confirmUpper) {
    userChoices = lowerCasedCharacters.concat(upperCasedCharacters);
  }
  else if (confirmLower && confirmNum) {
    userChoices = lowerCasedCharacters.concat(numericCharacters);
  }
  else if (confirmLower && confirmChar) {
    userChoices = lowerCasedCharacters.concat(specialCharacters);
  }
  else if (confirmUpper && confirmNum) {
    userChoices = upperCasedCharacters.concat(numericCharacters);
  }
  else if (confirmUpper && confirmChar) {
    userChoices = upperCasedCharacters.concat(specialCharacters);
  }
  else if (confirmNum && confirmChar) {
    userChoices = numericCharacters.concat(specialCharacters);
  }

  // 1 Type Selected
  else if (confirmLower) {
    userChoices = lowerCasedCharacters;
  }
  else if (confirmUpper) {
    userChoices = upperCasedCharacters;
  }
  else if (confirmNum) {
    userChoices = numericCharacters;
  }
  // Created space variable to fill uppercase conversion
  else if (confirmChar) {
    userChoices = specialCharacters;
  }
}

// Function to generate password with user input
function generatePassword() {
  for (var i = 0; i < passLength; i++) {
    var passResult = userChoices[Math.floor(Math.random() * userChoices.passLength)];
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);