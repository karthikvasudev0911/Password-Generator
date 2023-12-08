const passwordBox = document.getElementById("Password");
const length = 16;

// Characters that can be used for generating

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const special_Symbols = "@$%^&*!";

// Generate mixture from above Characters still Password length is 10
const allChar =upperCase + lowerCase + number + special_Symbols;

//  Random Function for generating Password

function generatePassword() {
    let Password = " ";
    Password += upperCase[Math.floor(Math.random() * upperCase.length)];
    Password += upperCase[Math.floor(Math.random() * lowerCase.length)];
    Password += upperCase[Math.floor(Math.random() * number.length)];
    Password += upperCase[Math.floor(Math.random() * special_Symbols.length)];
    
    // Condition to check Wheather Password length is 10 or not
    while(length > Password.length){
        Password += allChar[Math.floor(Math.random() * allChar.length)];
    }
    passwordBox.value = Password;

}


// Function for Copying the generated password
function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}