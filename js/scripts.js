let containerEl1 = document.getElementById("container-el1");
let containerEl2 = document.getElementById("container-el2");
let characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];
let passwordLength = 15;
let passwordLengthEl = document.getElementById("password-length").value;


function generateRandomPassword() {
    passwordLengthEl = document.getElementById("password-length").value;
    passwordLength = 15

    containerEl1.textContent = randonPassword();
    containerEl2.textContent = randonPassword();

    if (passwordLengthEl >= 1 && passwordLengthEl <= 23) {
        passwordLength = passwordLengthEl
        containerEl1.textContent = randonPassword();
        containerEl2.textContent = randonPassword();
    } else {
        containerEl1.textContent = randonPassword();
        containerEl2.textContent = randonPassword();
    }

}

function randonPassword() {
    let password = "";
    
    for (let i = 0; i < passwordLength; i++) {
        const randonPassword = Math.floor(Math.random() * characters.length)
        password += characters[randonPassword]
    }
    return password

}



