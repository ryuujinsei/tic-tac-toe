/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let currentPlayer = 'X'
let winner = false
let tie = false


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
  if (squareEl0.textContent !== '' || winner === true) {
    return
  } else {
  squareEl0.textContent = currentPlayer
  if (currentPlayer === 'X') {
    currentPlayer = 'O'
  } else {
    currentPlayer = 'X'
  }
  messageEL.textContent = `It's ${currentPlayer} turn`
  }
  if (squareEl0.textContent === squareEl1.textContent && squareEl1.textContent) {}
squareEl1.addEventListener('click', () => {
  if (squareEl1.textContent !== '' || winner === true) {
    return
  } else {
  squareEl1.textContent = currentPlayer
  if (currentPlayer === 'X') {
    currentPlayer = 'O'
  } else {
    currentPlayer = 'X'
  }
  messageEL.textContent = `It's ${currentPlayer} turn`
  }
 }
)
squareEl2.addEventListener('click', () => {
  if (squareEl2.textContent !== '' || winner === true) {
    return
  } else {
  squareEl2.textContent = currentPlayer
  if (currentPlayer === 'X') {
    currentPlayer = 'O'
  } else {
    currentPlayer = 'X'
  }
  messageEL.textContent = `It's ${currentPlayer} turn`
  }
 }
)

squareEl3.addEventListener('click', () => {
  if (squareEl3.textContent !== '' || winner === true) {
    return
  } else {
  squareEl3.textContent = currentPlayer
  if (currentPlayer === 'X') {
    currentPlayer = 'O'
  } else {
    currentPlayer = 'X'
  }
  messageEL.textContent = `It's ${currentPlayer} turn`
  }
 }
)

squareEl4.addEventListener('click', () => {
  if (squareEl4.textContent !== '' || winner === true) {
    return
  } else {
  squareEl4.textContent = currentPlayer
  if (currentPlayer === 'X') {
    currentPlayer = 'O'
  } else {
    currentPlayer = 'X'
  }
  messageEL.textContent = `It's ${currentPlayer} turn`
  }
 }
)

squareEl5.addEventListener('click', () => {
  if (squareEl5.textContent !== '' || winner === true) {
    return
  } else {
  squareEl5.textContent = currentPlayer
  if (currentPlayer === 'X') {
    currentPlayer = 'O'
  } else {
    currentPlayer = 'X'
  }
  messageEL.textContent = `It's ${currentPlayer} turn`
  }
 }
)

squareEl6.addEventListener('click', () => {
  if (squareEl6.textContent !== '' || winner === true) {
    return
  } else {
  squareEl6.textContent = currentPlayer
  if (currentPlayer === 'X') {
    currentPlayer = 'O'
  } else {
    currentPlayer = 'X'
  }
  messageEL.textContent = `It's ${currentPlayer} turn`
  }
 }
)

squareEl7.addEventListener('click', () => {
  if (squareEl7.textContent !== '' || winner === true) {
    return
  } else {
  squareEl7.textContent = currentPlayer
  if (currentPlayer === 'X') {
    currentPlayer = 'O'
  } else {
    currentPlayer = 'X'
  }
  messageEL.textContent = `It's ${currentPlayer} turn`
  }
 }
)

squareEl8.addEventListener('click', () => {
  if (squareEl8.textContent !== '' || winner === true) {
    return
  } else {
  squareEl8.textContent = currentPlayer
  if (currentPlayer === 'X') {
    currentPlayer = 'O'
  } else {
    currentPlayer = 'X'
  }
  messageEL.textContent = `It's ${currentPlayer} turn`
  }
 }
)


