const passwordBox = document.getElementById("password");
const passwordLengthInput = document.getElementById("passwordLength");
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+-={}[]:";

const alChars = upperCase + lowerCase + number + symbol;

function createPassword() {
    const length = parseInt(passwordLengthInput.value);
    let password = "";

    if (isNaN(length) || length <= 0) {
        alert("Please enter a valid password length greater than zero.");
        return;
    }

    for (let i = 0; i < length; i++) {
        password += alChars[Math.floor(Math.random() * alChars.length)];
    }

    passwordBox.value = password;
}

function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
}
