
const characterNumber = document.getElementById("characterAmountNumber")
const UppercaseElement = document.getElementById("Uppercase")
const NumbersElement = document.getElementById("Numbers")
const SymbolsElement = document.getElementById("Symbols")
const form = document.getElementById("passwordGeneratorForm")
const passowrdDipslay = document.getElementById("passwordDisplay")

characterNumber.addEventListener("input", sycnCharacter)

function sycnCharacter(e) {
    const value = e.target.value
    characterNumber.value = value
}

form.addEventListener("submit", e => {
    e.preventDefault()
    const characterAmount = characterNumber.value
    const Uppercase = UppercaseElement.checked
    const Numbers = NumbersElement.checked
    const Symbols = SymbolsElement.checked
    const password = generatePassword(characterAmount, Uppercase, Numbers, Symbols)
    passowrdDipslay.innerText = password

})

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
        

function generatePassword(characterAmount, Uppercase, Numbers, Symbols) {
    let charCodes = lower
    if (Uppercase) charCodes = charCodes.concat(upper)
    if (Numbers) charCodes = charCodes.concat(number)
    if (Symbols) charCodes = charCodes.concat(symbol)



    const passwordCharacters = []
    for (let i = 0; i < characterAmount; i++) {
      const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
      passwordCharacters.push(String.fromCharCode(characterCode))
    }
    return passwordCharacters.join("")
    }
    
function arrayFromLowToHigh(low, high){
    const array = []
    for (let i = low; i <= high; i++){
        array.push(i)
    }
    return array
}

