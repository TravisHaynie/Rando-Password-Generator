let containerEl1 = document.getElementById("container-el1");
let containerEl2 = document.getElementById("container-el2");
let characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];
let numberCharacters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
let passwordLength = 15;
let passwordLengthEl = document.getElementById("password-length").value;
let isClicked = true


function generateRandomPassword() {
    passwordLengthEl = document.getElementById("password-length").value;
    passwordLength = 15



    if (passwordLengthEl >= 1 && passwordLengthEl <= 23) {
        passwordLength = passwordLengthEl
        containerEl1.textContent = randomPassword();
        containerEl2.textContent = randomPassword();
    } else {
        containerEl1.textContent = randomPassword();
        containerEl2.textContent = randomPassword();
    }

}

function randomPassword() {
    let password = "";
    
    for (let i = 0; i < passwordLength; i++) {
        const randonPassword = Math.floor(Math.random() * characters.length)
        password += characters[randonPassword]
    }
    return password

}

function generateRandomNumberPassword() {
    passwordLengthEl = document.getElementById("password-length").value;
    passwordLength = 15


    if (passwordLengthEl >= 1 && passwordLengthEl <= 23) {
        passwordLength = passwordLengthEl
        containerEl1.textContent = randomNumberPassword();
        containerEl2.textContent = randomNumberPassword();
    } else {
        containerEl1.textContent = randomNumberPassword();
        containerEl2.textContent = randomNumberPassword();
    }

}

function randomNumberPassword() {
    let password = "";

    
    for (let i = 0; i < passwordLength; i++) {
        const randomPassword = Math.floor(Math.random() * characters.length)
        password += randomPassword
    }
    return password

}

function toggleBetweenNumbersOrSymbols() {

    if (isClicked) {
      
        containerEl1.textContent = randomNumberPassword()
        containerEl2.textContent = randomNumberPassword()
        isClicked = false

    } else {

        passwordLengthEl = document.getElementById("password-length").value;
        passwordLength = 15
    
        if (passwordLengthEl >= 1 && passwordLengthEl <= 23) {
            passwordLength = passwordLengthEl
            containerEl1.textContent = randomPassword();
            containerEl2.textContent = randomPassword();
        } else {
            containerEl1.textContent = randomPassword();
            containerEl2.textContent = randomPassword();
        }

        isClicked = true
    } 

    console.log(containerEl1)

}

console.log(randomNumberPassword())


