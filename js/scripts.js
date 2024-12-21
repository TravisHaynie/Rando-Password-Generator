let containerEl1 = document.getElementById("container-el1")
let containerEl2 = document.getElementById("container-el2")
let characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];
let buttonEl = document.getElementById("button-el")


function generatePassword() {
    const newPassword = generateRandomPassword()
    const newPasswordTwo = generateRandomPasswordTwo()
    containerEl1.textContent = newPassword
    containerEl2.textContent = newPasswordTwo

}

function generateRandomPassword() {
    let randomPassword = Math.floor(Math.random() * characters.length)
    console.log(randomPassword)
    let passwordLength = 15;
    let password = ""

    for (let i = 0; i < passwordLength; i++) {
       
            randomPassword = Math.floor(Math.random() * characters.length)
            password += characters[randomPassword]
            console.log(characters[randomPassword])
        
    }

    return password
}

function generateRandomPasswordTwo() {
    let randomPassword = Math.floor(Math.random() * characters.length)
    console.log(randomPassword)
    let passwordLength = 15;
    let password = ""

    for (let i = 0; i < passwordLength; i++) {

            randomPassword = Math.floor(Math.random() * characters.length)
            password += characters[randomPassword]
            console.log(characters[randomPassword])
        }

    return password
}

