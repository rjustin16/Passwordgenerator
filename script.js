// accessing elements in html
const characterNumber = document.getElementById("characterNumber")
const UppercaseElement = document.getElementById("Uppercase")
const NumbersElement = document.getElementById("Numbers")
const SymbolsElement = document.getElementById("Symbols")
const form = document.getElementById("passwordForm")
const passwordDipslay = document.getElementById("passwordText")


// Generate Password Button
form.addEventListener("submit", e => {
    // stop reload
    e.preventDefault()
    // add character amount by the value added
    const passwordlength = characterNumber.value
    // if uppercase checked add uppercase
    const Uppercase = UppercaseElement.checked
     // if number checked add number
    const Numbers = NumbersElement.checked
    // if symbol checked add symbol
    const Symbols = SymbolsElement.checked
    // run generate password function
    const password = generatePassword(passwordlength, Uppercase, Numbers, Symbols)
    // display password variable from generate password function in password display
    passwordText.innerText = password

})

  var symb = "~!@#$%^&*()_+{}:?><;.,";
  var numb = "1234567890";
  var upperCaseLetters = "ABCDEFGHIJKLMNOPRSTUVWXYZ";
  var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";


    
// random generator function
function generatePassword(passwordlength, Uppercase, Numbers, Symbols) {
    // default to lowercase
    let display = lowerCaseLetters
    // if uppercase is true add uppercase from var 
    if (Uppercase) display = display.concat(upperCaseLetters)
    // if number is true add number from number var
    if (Numbers) display = display.concat(numb)
    // if symbol is true add symbol from symbol var
    if (Symbols) display = display.concat(symb)

    // empty array to pass password characters through
    const passwordCharacters = []
    // number of characters created equal the character amount
    for (let i = 0; i < passwordlength; i++) {
        // randomize the characters according to display rule
      const passwordcontent = display[Math.floor(Math.random() * display.length)]
    //   have passwordcontent push from the characters into the password
      passwordCharacters.push(passwordcontent)
    }
    return passwordCharacters.join("")
    }
    

