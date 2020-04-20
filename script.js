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




function generatePassword(){
  var userClick = prompt("Choose the length (more than 8 characters)"); 
  console.log(userClick);
  if (userClick > 8){
    console.log ("oklenght"); 
    var ran = Math.floor(Math.random()*lowerCase.length);
    console.log (ran);
    console.log(lowerCase[ran]);
  }
  else {
    alert("Try again :)");
  }
  return "not yet ready"
  

}

//Arrays//

 var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y","z"]

 /*Contar todas las letras. 2. Crear una variable con un password temporal que va a cambiando. 3. A esa variable, se le va a concatenar cada letra nueva que se va a ir 
 generando aleatoriamente.

 4. Return la nueva variable.
 5.Agregar demás arrays
 6.Preguntarle al usuario si quiere usar cada uno de los arrays.
 7.Depende del usuario contestar si si o si no, usar esos arrays.
 

*/