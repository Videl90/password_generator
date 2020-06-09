// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input//
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button//
generateBtn.addEventListener("click", writePassword);

//Arrays//

var arrLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y","z"];
var arrUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var arrNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var arrSpecialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "=", "*", "+", ",", "-", ".", "/", ";", "<", ">", "?", "@", "[", "]", "^", "_", "´", "{", "}", "|", "~"];

//Temporary Password//
var randomPassword ="";
var availableChar = [];
var passLength;

//This is the password Generator//
function generatePassword(){
      randomPassword = "";
      passLength = prompt("Choose the length (more than 8 characters, less than 128)"); //The user chooses the lenght//
      console.log(passLength); //prints the users choice//
      if (passLength >= 8 && passLength <= 128) { //Delimitates the users choice//
        console.log("ok lenght");
      
      }
      else {
        alert("Try again :)"); //if the user choose a number that doesn't relate with the parameter, show this alert"
        return
      }  

      lowerCase = confirm("Do you want to include lowercase letters?"); //Lower case choice//
      upperLetters = confirm("Do you want to include uppercase letters?"); //Upper case choice//
      num = confirm("Do you want to include numbers?"); //number choice//
      specialChar = confirm("Do you want to include special characters?"); //special characters choice// 

      if(lowerCase === false && upperLetters === false && num === false && specialChar === false){
        alert("You must choose at least one option");
        return
      }

      if(lowerCase === true){
        availableChar = availableChar.concat(arrLowerCase); 
      }

      if(upperLetters === true){
        availableChar = availableChar.concat(arrUpperCase); 
      }

      if(specialChar === true){
        availableChar = availableChar.concat(arrSpecialChar);
      }

      if(num === true){
        availableChar = availableChar.concat(arrNum); 
      }


      for (var i = 0; i < passLength; i++ ) {
        var randomLower = availableChar[Math.floor(Math.random() * availableChar.length)];
        randomPassword = randomPassword + randomLower;
      }
      return randomPassword;
}


//Calling the functions//





/*When the page loads, prompts appear:
  lower case
  upper case
  numbers 
  special characters

if lower case = true ----> loop and math random through that array.

if else upper case = true ----> loop and math random through that array.

if else numbers ----> ----> loop and math random through that array.

if else special characters ----> loop and math random through that array.

else ---> You need to choose and option.












 /*Contar todas las letras. 2. Crear una variable con un password temporal que va a cambiando. 
 3. A esa variable, se le va a concatenar cada letra nueva que se va a ir 
 generando aleatoriamente.

 4. Return la nueva variable.
 5.Agregar demás arrays
 6.Preguntarle al usuario si quiere usar cada uno de los arrays.
 7.Depende del usuario contestar si si o si no, usar esos arrays.
 
*/