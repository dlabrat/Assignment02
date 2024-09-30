// Larger or Smaller? 

let aNum = parseInt(prompt('What is your first integer? '))
let anotherNum = parseInt(prompt('What is your nextinteger? '))
let bigNum 

//aNum =5
//anotherNum = 10

if (aNum > anotherNum) {
    bigNum = aNum
    document.write(bigNum +' is your larger number. ')
} else if (anotherNum > aNum) {
    bigNum = anotherNum
    document.write(bigNum +' is your larger number. ')
} else {
    document.write('The numbers are equal.')
}
