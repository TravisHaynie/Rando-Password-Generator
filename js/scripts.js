let containerEl1 = document.getElementById("container-el1");
let containerEl2 = document.getElementById("container-el2");
let characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];
let passwordLength = 15;
let passwordLengthEl = document.getElementById("password-length").value;
isClicked = true;
let getRandomPassword = "";
let getRandomPassword2 = "";
let getRandomNumberPassword = "";
let getRandomNumberPassword2 = "";

function generateRandomPassword() {
    passwordLengthEl = document.getElementById("password-length").value;
    passwordLength = 15;

    getRandomPassword = randomPassword()
    getRandomPassword2 = randomPassword()
    containerEl1.textContent = getRandomPassword;
    containerEl2.textContent = getRandomPassword2;

    if (passwordLengthEl > 0 && passwordLengthEl <= 23) {
        passwordLength = passwordLengthEl;
        getRandomPassword = randomPassword()
        getRandomPassword2 = randomPassword()
        containerEl1.textContent = getRandomPassword;
        containerEl2.textContent = getRandomPassword2;
    }

    getRandomNumberPassword = randomNumberPassword()
    getRandomNumberPassword2 = randomNumberPassword()


}

function randomPassword() {
    let password = "";

    for (let i = 0; i < passwordLength; i++) {
        const randonPassword = Math.floor(Math.random() * characters.length)
        password += characters[randonPassword]
    }
    return password

}

function randomNumberPassword() {
    let password = "";

    for (let i = 0; i < passwordLength; i++) {
        const randonPassword = Math.floor(Math.random() * 10)
        password += randonPassword
    }
    return password
}



function toggleBetweenNumbersOrSymbols() {
    if (isClicked) {
        containerEl1.textContent = getRandomNumberPassword
        containerEl2.textContent = getRandomNumberPassword2

        isClicked = false;

    } else {
        containerEl1.textContent = getRandomPassword;
        containerEl2.textContent = getRandomPassword2;

        isClicked = true;
    }

}

function copyContainerOne() {
    let containerEl1 = document.getElementById("container-el1").textContent;
    navigator.clipboard.writeText(containerEl1);
}


function copyContainerTwo() {
    let containerEl2 = document.getElementById("container-el2").textContent;
    navigator.clipboard.writeText(containerEl2);
}


