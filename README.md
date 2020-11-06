# Passwordgenerator
# 03 JavaScript: Password Generator

## What I did

I chose to make my password generator an input type instead of with prompts. The generator will default to a lowercase password when the password generator button is hit. There are options for including uppercase, numbers, or symbols to your password. 

## How I did it

I first started with my HTML and CSS to create an area where you have a display where the password will be shown. Then there is an input section where you can place how many characters you want in the password. This was done with an <input> with the class number input (this is where the 8-128 length is done). Next I used check boxes input tags on the uppercase, symbol, and number sections. These were all placed with individual ID tags to be able to be accessed via the js file. All of the inputs were wrapped in a form tag so to apply functionality to the check boxes I used addEventListener to add functionality to the checkboxes. 

## Password content

The next step was to add value to uppercase, lowercase, symbol, and numbers so the inputs had something to reference when checked. I made variables that included each parameter of the password and a for loop that would randomize each character in the password.

## Generate Password

Finally the last thing to do was to generate the password. This was done with the generatePassword function where an if statment was used. The default setting that was set here was to let the password be lowercase. Then using If statements, the password would be modified depending on if the other parameters were checked, then it would access the variables set in the javascript to add to the password generator. Then in a for loop, the length of the password is set against the characterAmount which is equal to the value of the character number inputed by the user. The display variable is then randomized to randomize the password with math.floor and math.random on the charactercode variable. Finally to display the password, the password generator function was placed into the addEvenetListener where it was set equal to password, then password was defined using the passworddisplay ID in the HTML file. 
