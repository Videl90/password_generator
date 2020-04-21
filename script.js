// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Arrays//

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y","z"];
var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "=", "*", "+", ",", "-", ".", "/", ";", "<", ">", "?", "@", "[", "]", "^", "_", "´", "{", "}", "|", "~"];


var printPass = "your password";


function generatePassword(){
  var userClick = prompt("Choose the length (more than 8 characters, less than 128)");
  console.log(userClick); 
  if (userClick > 8) {
    console.log("ok lenght");
    var ran = Math.floor(Math.random() * lowerCase.length);
    console.log(ran);
    console.log(lowerCase[ran]);

  }
  else {
    alert("Try again :)");
  }

  return printPass;
}


var wantUppercase = confirm("Do you want to include uppercase letters?");

    for (var i = 0; i < 128; i++) {
      var ran = Math.floor(Math.random() * upperLetters.length);
      console.log(upperLetters[ran]);
    } 

var wantLowercase = confirm("Do you want to include lowercase letters?");

    for (var i = 0; i < 128; i++) {
      var ran = Math.floor(Math.random() * lowerCase.length);
      console.log(lowerCase[ran]);
    } 

var wantSpecialChar = confirm("Do you want to include special characters?");

    for (var i = 0; i < 128; i++) {
      var ran = Math.floor(Math.random() * specialChar.length);
      console.log(specialChar[ran]);
    } 



 /*Contar todas las letras. 2. Crear una variable con un password temporal que va a cambiando. 
 3. A esa variable, se le va a concatenar cada letra nueva que se va a ir 
 generando aleatoriamente.

 4. Return la nueva variable.
 5.Agregar demás arrays
 6.Preguntarle al usuario si quiere usar cada uno de los arrays.
 7.Depende del usuario contestar si si o si no, usar esos arrays.
 
*/

