// Get references to the elements
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Password variables
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialChars = "!@#$%^&*()_+[]{}|;:'<>,.?/~";

// Function to generate a password based on users variable selections
function generatePassword() {
  // Generate empty password to build off of from users variable selections
  var newPassword = "";

  // Define password length
  var length = prompt("Enter password length (between 8 and 128 characters):");

  // Define minimum password length - Resets if minimum is not met by user
  if (length < 8){
    alert("Length of password must be greater than 8 characters. Please try again.");
    return "";
  }
  //Define maximum password length - Resets if maximum is exceeded by user
  if (length > 128){
    alert("Length of password must be less than 128 characters. Please try again.");
    return "";
  }

  var includeLower = confirm("Include lowercase characters?");
  var includeUpper = confirm("Include uppercase characters?");
  var includeNumbers = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

   // Resets password generator if at least one character type is not chosen by user
  if (
    !includeLower &&
    !includeUpper &&
    !includeNumbers &&
    !includeSpecial
  ) {
    alert("You must include at least one character type.");
    return "";
  }

  // Generates list of usable characters for password based on user input
  var charset = "";
  if (includeLower) {
    charset += lowerCase;
  }
  if (includeUpper) {
    charset += upperCase;
  }
  if (includeNumbers) {
    charset += numbers;
  }
  if (includeSpecial) {
    charset += specialChars;
  }

  // Generate the password
  for (var i = 0; i < length; i++) {
    newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
  }

  return newPassword;
}

// Event listener to generate password
generateBtn.addEventListener("click", function () {
  var password = generatePassword();
  passwordText.value = password;
});
