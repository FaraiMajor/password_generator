// Declares and store possible characters in a variable called chars
const chars =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Declares a variable called passwordLength and assign its value to 12
let passwordLength = 8;

// Stores the password1-el paragraph in a variable called password1EL
const password1El = document.getElementById("password1-el");
const password2El = document.getElementById("password2-el");
const slider = document.getElementById("length-slider")

function generatePassword() {
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        let index = Math.floor(Math.random() * chars.length)

        password += chars[index];
    }
    return password
}













// get password length and update value on page
slider.addEventListener("input", () => {
    let length = slider.value;
    document.getElementById("length-value").textContent = length
    passwordLength = length
})