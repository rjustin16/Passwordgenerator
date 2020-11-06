// accessing elements in html
const characterNumber = document.getElementById("characterNumber")
const UppercaseElement = document.getElementById("Uppercase")
const NumbersElement = document.getElementById("Numbers")
const SymbolsElement = document.getElementById("Symbols")
const form = document.getElementById("passwordGeneratorForm")
const passwordDipslay = document.getElementById("passwordText")


// Generate Password Button
form.addEventListener("submit", e => {
    // stop reload
    e.preventDefault()
    // add character amount by the value added
    const characterAmount = characterNumber.value
    // if uppercase checked add uppercase
    const Uppercase = UppercaseElement.checked
     // if number checked add number
    const Numbers = NumbersElement.checked
    // if symbol checked add symbol
    const Symbols = SymbolsElement.checked
    // run generate password function
    const password = generatePassword(characterAmount, Uppercase, Numbers, Symbols)
    // display password variable from generate password function in password display
    passwordText.innerText = password

})

// array to get every character between charCode list
function arrayFromLowToHigh(low, high){
        const array = []
        for (let i = low; i <= high; i++){
            array.push(i)
        }
        return array
    }


// charCode list for each parameter
const lower = arrayFromLowToHigh(97, 122)
const upper = arrayFromLowToHigh(65, 90)
const number = arrayFromLowToHigh(48, 57)
const symbol = arrayFromLowToHigh(33, 47).concat(
    arrayFromLowToHigh(58, 64)
    ).concat(
    arrayFromLowToHigh(91, 96)
    ).concat(
    arrayFromLowToHigh(123, 126)
    )


    
// random generator function
function generatePassword(characterAmount, Uppercase, Numbers, Symbols) {
    // default to lowercase
    let ref = lower
    // if uppercase is true add uppercase from char 
    if (Uppercase) ref = ref.concat(upper)
    // if number is true add number from char codes
    if (Numbers) ref = ref.concat(number)
    // if symbol is true add symbol from char codes
    if (Symbols) ref = ref.concat(symbol)

    // empty array to pass password characters through
    const passwordCharacters = []
    // number of characters created equal the character amount
    for (let i = 0; i < characterAmount; i++) {
        // randomize the characters according to ref rule
      const characterCode = ref[Math.floor(Math.random() * ref.length)]
    //   have characterCode pull from the char code reference
      passwordCharacters.push(String.fromCharCode(characterCode))
    }
    return passwordCharacters.join("")
    }
    

