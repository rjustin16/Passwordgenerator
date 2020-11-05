const characterAmountRagne = document.getElementById("characterAmountRagne")
const characterAmountNumber = document.getElementById("characterAmountNumber")
const includeUppercaseElement = document.getElementById("includeUppercase")
const includeNumbersElement = document.getElementById("includeNumbers")
const includeSymbolsElement = document.getElementById("includeSymbols")
const form = document.getElementById("passwordGeneratorForm")
const passowrdDipslay = document.getElementById("passwordDisplay")

const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
    arrayFromLowToHigh(58, 64)
    ).concat(
    arrayFromLowToHigh(91, 96)
    ).concat(
    arrayFromLowToHigh(123, 126)
    )
        
    


characterAmountNumber.addEventListener("input", sycnCharacterAmount)
characterAmountRagne.addEventListener("input", sycnCharacterAmount)

form.addEventListener("submit", e =>{
    e.preventDefault()
    const characterAmount = characterAmountNumber.value
    const includeUppercase = includeUppercaseElement.checked
    const includeNumbers = includeNumbersElement.checked
    const includeSymbols = includeSymbolsElement.checked
    const password = generatePassword(characterAmount, includesUppercase, includesNumbers, includesSymbols)
    passowrdDipslay.innerText = password

})

function generatePassword(characterAmount, includeUppercase, includeNumbers, includesSymbols) {
    let charCodes = LOWERCASE_CHAR_CODES
    if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
    if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
    if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
    string.fromCharCode(65)

    const passwordCharacters = []
    for (let i = 0; i < characterAmount, i++){
        const characterCode = charCodes[Math.floor(Math.random()* characterAmount)]
        passwordCharacters.push(string.fromCharCode(character))
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

function sycnCharacterAmount(e) {
    const value = e.target.value
    characterAmountRagne.value = value
    characterAmountNumber.value = value
}