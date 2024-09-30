// The"Coin Flip" Game 

let randomNum = Math.round((Math.random()*100) +1)
let coinFlip = randomNum
let choice = prompt('Plesae select Heads or Tails (enter h or t): ')

if (choice === 'h') {
    if (coinFlip > 50) {
        alert('The flip was heads and you chose heads...you win!')
    } else if (coinFlip  <= 50) {
        alert('The flip was tails but you chose heads...you lose!')
    }
}else if (choice === 't') {
     if (coinFlip < 50) {
        alert('The flip was tails and you chose tails...you win!')
    } else if (coinFlip  >= 50) {
        alert('The flip was heads but you chose tails...you lose!')
    }
} else {
    alert('Thanks for playing.')
}
