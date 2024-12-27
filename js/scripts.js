let containerEl1 = document.getElementById("container-el1");
console.log(containerEl1.value)
let containerEl2 = document.getElementById("container-el2");
let characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];
let passwordLength = 15;
let passwordLengthEl = document.getElementById("password-length").value;
isClicked = true;
console.log(containerEl1)
console.log(containerEl1Value)

function generateRandomPassword() {

    passwordLengthEl = document.getElementById("password-length").value;
    passwordLength = 15;;

    if (passwordLengthEl >= 1 && passwordLengthEl <= 23) {
        passwordLength = passwordLengthEl;
        containerEl1.textContent = randomPassword();
        containerEl2.textContent = randomPassword();
    } else {
        containerEl1.textContent = randomPassword();
        containerEl2.textContent = randomPassword();
    }
    console.log(containerEl1)
    
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
        containerEl1.textContent = randomNumberPassword()
        containerEl2.textContent = randomNumberPassword()

        isClicked = false;

    } else {
        containerEl1.textContent = randomPassword();
        containerEl2.textContent = randomPassword();

        isClicked = true;
    }

}


function copyContainerOne() {

    let containerEl1 = document.getElementById("container-el1").textContent;
    console.log(containerEl1)
    navigator.clipboard.writeText(containerEl1);

}


function copyContainerTwo() {

    let containerEl2 = document.getElementById("container-el2").textContent;
    navigator.clipboard.writeText(containerEl2);
    console.log(containerEl2)

}


