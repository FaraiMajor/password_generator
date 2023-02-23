const password1El = document.getElementById("password1-el");
const password2El = document.getElementById("password2-el");
const slider = document.getElementById("length-slider");
const btn_el = document.getElementById("button");

// Declares and store possible characters in a variable called chars
const chars =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Declares a variable called passwordLength and assign its value to 12
let passwordLength = 8;

function generatePassword() {
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        let index = Math.floor(Math.random() * chars.length)

        password += chars[index];
    }
    return password
}

// Creates a function getGeneratePasswords() that displays generated passwords in HTML document
btn_el.addEventListener("click", () => {
    // Displays the message in the messageEl using messageEl.textContent
    password1El.innerHTML = `<input type="text" id="1" value="${generatePassword()}" onclick="copyToClipboard(1)" readonly>`;
    password2El.innerHTML = `<input type="text" id="2" value="${generatePassword()}" onclick="copyToClipboard(2)" readonly>`;

})


// Creates a function copyToClipboard() that copies selected password just clicking on hit
function copyToClipboard(index) {
    const copyText = document.getElementById(index).value;
    navigator.clipboard.writeText(copyText).then(() => {
        // Alert the user that the action took place.
        alert("Copied to clipboard");
    });
}


// get password length and update value on page
slider.addEventListener("input", () => {
    let length = slider.value;
    document.getElementById("length-value").textContent = length
    passwordLength = length
})