# Passwordgenerator
# 03 JavaScript: Password Generator

## What I did

I chose to make my password generator an input type instead of with prompts. The generator will default to a lowercase password when the password generator button is hit. There are options for including uppercase, numbers, or symbols to your password. 

## How I did it

I first started with my HTML and CSS to create an area where you have a display where the password will be shown. Then there is an input section where you can place how many characters you want in the password. This was done with an <input> with the class number input (this is where the 8-128 length is done). Next I used check boxes input tags on the uppercase, symbol, and number sections. These were all placed with individual ID tags to be able to be accessed via the js file. All of the inputs were wrapped in a form tag so to apply functionality to the check boxes I used addEventListener to add functionality to the checkboxes. 

## Char codes

The next step was to add value to uppercase, lowercase, symbol, and numbers so the inputs had something to reference when checked. I found that there was an array online with these characters already so using String.fromCharCode I was able to access that data base to pull the characters from (reference https://www.w3schools.com/jsref/jsref_fromcharcode.asp). Being able to properly access the charCodes needed to be done with a function utilizing a for loop that went from the lowest value in the CharCodes to the highest value in the charCodes. This had to be done because uppercase numbers for example are 65-90 so the function needed to know where to start (60) and where to end (90) for every specific parameter.  

## Generate Password

Finally the last thing to do was to generate the password. This was done with the generatePassword function where an if statment was used. The default setting that was set here was to let the password be lowercase. Then using If statements, the password would be modified depending on if the other parameters were checked, then it would access the Char codes set in the online array to add to the password generator. Then in a for loop, the length of the password is set against the characterAmount which is equal to the value of the character number inputed by the user. The ref variable is then randomized to randomize the password with math.floor and math.random on the charactercode variable. Next to get the characters in the password the string.fromcharcode is used and referencing the list using the charactercode variable.  Finally to display the password, the password generator function was placed into the addEvenetListener where it was set equal to password, then password was defined using the passworddisplay ID in the HTML file. 
