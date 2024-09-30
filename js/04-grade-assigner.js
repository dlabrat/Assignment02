// The “Grade Assigner” Application

let userNum = parseInt(prompt('Enter number between 1 - 100: '))
let lower = 1;
let upper = 100;

switch (true) {
    	case (userNum>=60 && userNum<=69):
            console.log('You received a D.')
            break
        case (userNum>=70 && userNum<=79):
            console.log('You received a C.')
            break
        case (userNum>=80 && userNum<=89):
            console.log('You received a B.')
            break
        case (userNum>=90 && userNum<=100):
            console.log('You received a A.')
            break
        case (userNum < 60 && userNum >=0):
            console.log('You received a F.')
            break
        default: 
            console.log("The number is not between " + lower + " and " + upper + "\nGoodbye.")
}
