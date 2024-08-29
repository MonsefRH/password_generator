const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
// Without numbers (filters out digits)
const withoutNumbers = characters.filter(char => isNaN(char) || char === ' ');
let numbers_wanted = true ;
// Without symbols (only letters and digits)
const withoutSymbols = characters.filter(char => /[a-zA-Z0-9]/.test(char));
let symbols_wanted = true ;
// Only letters (uppercase and lowercase)
const onlyLetters = characters.filter(char => /[a-zA-Z]/.test(char));

let password_suggestion1 = document.getElementById("password1");
let password_suggestion2 = document.getElementById("password2");

function RemoveNumbers(){
    numbers_wanted =!numbers_wanted;
    console.log('numbers '+ numbers_wanted ) 
}
function RemoveSymbols(){
    symbols_wanted = !symbols_wanted;
    console.log('symbols '+ symbols_wanted)
}

function construtPassword(element) {
    let password = '';
    let password_length = Number(document.getElementById("length").value);
    if (numbers_wanted && symbols_wanted){
        for (let i = 0; i < password_length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password += characters[randomIndex];
    }
    }
    else if (!numbers_wanted && !symbols_wanted) {
        for (let i = 0; i < password_length; i++) {
            const randomIndex = Math.floor(Math.random() * onlyLetters.length);
            password += onlyLetters[randomIndex];
        }
    }
    else if (!numbers_wanted){
        for (let i = 0; i < password_length; i++) {
            const randomIndex = Math.floor(Math.random() * withoutNumbers.length);
            password += withoutNumbers[randomIndex];
        }
    }
    else if (!symbols_wanted){
        for (let i = 0; i < password_length; i++) {
            const randomIndex = Math.floor(Math.random() * withoutSymbols.length);
            password += withoutSymbols[randomIndex];
        }
    }
    element.value=password
}
function get_password(){
    construtPassword(password_suggestion1);
    construtPassword(password_suggestion2);
}

function copyPassword(elementId) {
    var copyText = document.getElementById(elementId);
    if (copyText.value.length !=0){

        // Select the entire text inside the input field
        copyText.select();
        copyText.setSelectionRange(0, 99999); 
    
        // Copy the selected text to the clipboard
        document.execCommand("copy");
    
        alert("Copied the password: " + copyText.value);
    }
}

// functions to control the length of the password 
function increment() {
    const input = document.getElementById('length');
    const currentValue = parseInt(input.value);
    const maxValue = parseInt(input.max);

    if (currentValue < maxValue) {
        input.value = currentValue + 1;
    }
    console.log('increment');
}

function decrement() {
    const input = document.getElementById('length');
    const currentValue = parseInt(input.value);
    const minValue = parseInt(input.min);

    if (currentValue > minValue) {
        input.value = currentValue - 1;
    }
    console.log('decrement');
}

// to add the light mode 
let light_mode_button = document.getElementById('light-mode');
let light_mode_container = document.querySelector('.container');


function toggleMode() {
    light_mode_container.classList.toggle('light-container');
    console.log('light mode ')
}

// add event listeners
light_mode_button.addEventListener('click', toggleMode);
