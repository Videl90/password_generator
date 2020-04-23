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

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y","z"];
var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "=", "*", "+", ",", "-", ".", "/", ";", "<", ">", "?", "@", "[", "]", "^", "_", "´", "{", "}", "|", "~"];

//Temporary Password//
var tempPass = "your password";

//This is the password Generator//
function generatePassword(){
      generateBtn = prompt("Choose the length (more than 8 characters, less than 128)"); //The user chooses the lenght//
      console.log(generateBtn); //prints the users choice//
      if (generateBtn >= 8 && generateBtn <= 128) { //Delimitates the users choice//
        console.log("ok lenght");
      
      }
      else {
        alert("Try again :)"); //if the user choose a number that doesn't relate with the parameter, show this alert"
      }

  
      lowerCase = confirm("Do you want to include lowercase letters?"); //Lower case choice//
      upperLetters = confirm("Do you want to include uppercase letters?"); //Upper case choice//
      num = confirm("Do you want to include numbers?"); //number choice//
      specialChar = confirm("Do you want to include special characters?"); //special characters choice// 

      //lowerCase loop//
      if (lowerCase === true);{
        for (var i = 0; i < 26; i++) {
          var ran = Math.floor(Math.random() * lowerCase.length);
          console.log(lowerCase[ran]);
        } 
      }
      
      //upperCase loop//
      if (upperLetters === true);{
        for (var i = 0; i < 26; i++) {
          var ran = Math.floor(Math.random() * upperLetters.length);
          console.log(upperLetters[ran]);
        }
      }  

      //specialChar loop//
      if (specialChar === true);{
        for (var i = 0; i < 29; i++) {
          var ran = Math.floor(Math.random() * specialChar.length);
          console.log(specialChar[ran]);
        }
      }

      //numbers loop//
      if (num === true);{
        for (var i = 0; i < 10; i++) {
          var ran = Math.floor(Math.random() * num.length);
          console.log(num[ran]);
        }
      }

}

//Calling the functions//
generateBtn.addEventListener("click", writePassword);
generatePassword();












 /*Contar todas las letras. 2. Crear una variable con un password temporal que va a cambiando. 
 3. A esa variable, se le va a concatenar cada letra nueva que se va a ir 
 generando aleatoriamente.

 4. Return la nueva variable.
 5.Agregar demás arrays
 6.Preguntarle al usuario si quiere usar cada uno de los arrays.
 7.Depende del usuario contestar si si o si no, usar esos arrays.
 
*/