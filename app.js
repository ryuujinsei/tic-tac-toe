/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let currentPlayer = 'X'



/*------------------------ Cached Element References ------------------------*/
const messageEL = document.querySelector('#message')


const squareEl0 = document.getElementById('0')
const squareEl1 = document.getElementById('1')
const squareEl2 = document.getElementById('2')
const squareEl3 = document.getElementById('3')
const squareEl4 = document.getElementById('4')
const squareEl5 = document.getElementById('5')
const squareEl6 = document.getElementById('6')
const squareEl7 = document.getElementById('7')
const squareEl8 = document.getElementById('8')


/*-------------------------------- Functions --------------------------------*/
messageEL.textContent = `It's ${currentPlayer} turn`


/*----------------------------- Event Listeners -----------------------------*/
squareEl0.addEventListener('click', () => {
  squareEl0.textContent = currentPlayer
}
)
squareEl1.addEventListener('click', () => {
  squareEl1.textContent = currentPlayer
}
)
squareEl2.addEventListener('click', () => {
  messageEL.textContent = currentPlayer
}
)
squareEl3.addEventListener('click', () => {
  messageEL.textContent = currentPlayer
}
)
squareEl4.addEventListener('click', () => {
  messageEL.textContent = currentPlayer
}
)
squareEl5.addEventListener('click', () => {
  messageEL.textContent = currentPlayer
}
)
squareEl6.addEventListener('click', () => {
  messageEL.textContent = currentPlayer
}
)
squareEl7.addEventListener('click', () => {
  messageEL.textContent = currentPlayer
}
)
squareEl8.addEventListener('click', () => {
  messageEL.textContent = currentPlayer
}
)
