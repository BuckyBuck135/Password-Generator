//The array containing all the characters
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

//Constants for manipulating the DOM
const password1 = document.getElementById("password-1");
const password2 = document.getElementById("password-2");
let toastDiv = document.getElementById("toast-container");


//Hard-coding the password length
let passwordLength = 15;

//Functions
function getRandomCharacter() {
    let randomIndex = Math.floor(Math.random()*characters.length);
    return characters[randomIndex];
}

function generatePasswords() {
    //creates constants for storing the characters
    let randomPassword1="";
    let randomPassword2=""

    // loops the getRandomCharacter function and stores the characters in the constants
    //passwordLength is hard-coded for now. Later to be defined by user input
    for (let i=0; i<passwordLength;i++) {
        randomPassword1 += getRandomCharacter();
    }
    for (let i=0; i<passwordLength;i++) {
        randomPassword2 += getRandomCharacter();
    }

    //displays the constants
    password1.textContent = randomPassword1;
    password2.textContent = randomPassword2;
}

function copyPassword(passwordText) {
    navigator.clipboard.writeText(passwordText);
    showToastContainer()
}

function showToastContainer() {
    toastDiv.textContent = "Copied to clipboard!"
    toastDiv.classList.add("toast-container");
    toastDiv.classList.add("elementToFadeInAndOut");
    // Sets a 4s timer to remove the classes
    setTimeout(function() {
      toastDiv.classList.remove("elementToFadeInAndOut");    
      toastDiv.classList.remove("toast-container");
      toastDiv.textContent = ""
    }, 4000);
}


//// Color picker localStorage ////

const colorThemes = document.querySelectorAll('[name="theme"]');

// store theme
function storeTheme(theme) {
  localStorage.setItem("theme", theme);
};

// set theme when visitor returns
function setTheme() {
  const activeTheme = localStorage.getItem("theme");
  colorThemes.forEach((themeOption) => {
    if (themeOption.id === activeTheme) {
      themeOption.checked = true;
    }
  });
  // fallback for no :has() support
  document.documentElement.className = activeTheme;
};

colorThemes.forEach((themeOption) => {
  themeOption.addEventListener("click", () => {
    storeTheme(themeOption.id);
    // fallback for no :has() support
    document.documentElement.className = themeOption.id;
  });
});

document.onload = setTheme();


