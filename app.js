/*-------------------------------- Constants --------------------------------*/






/*---------------------------- Variables (state) ----------------------------*/
let board = ['', '', '', '', '', '', '', '', '']
let turn = 'X'
let winner = false
let tie = false


/*------------------------ Cached Element References ------------------------*/
const messageEl = document.querySelector('#message');
const resetBtnEl = document.querySelector('#reset');

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
const resetGame = () => {
board = ['', '', '', '', '', '', '', '', ''] 
turn = 'X'
winner= false
tie = false
showGame()
}

const showGame = () => {
  squareEl0.textContent = board[0]
  squareEl1.textContent = board[1]
  squareEl2.textContent = board[2]
  squareEl3.textContent = board[3]
  squareEl4.textContent = board[4]
  squareEl5.textContent = board[5]
  squareEl6.textContent = board[6]
  squareEl7.textContent = board[7]
  squareEl8.textContent = board[8]

  updateMessage()
}



const updateMessage = () => {
  if (winner === true) {
    messageEl.textContent = turn + ' wins'
  } else if (tie === true) {
    messageEl.textContent = 'it is a tie'
  } else {
    messageEl.textContent = 'it is ' + turn + "'s turn"
  }
}

const checkForWinner = () => {
  if(board[0] === turn && board[1] === turn && board[2] === turn) {
    winner = true
  } else if (board[3] === turn && board[4] === turn && board[5] === turn) {
    winner = true 
  } else if (board[6] === turn && board[7] === turn && board[8] === turn) {
    winner = true
  } else if (board[0] === turn && board[3] === turn && board[6] === turn) {
    winner = true
  } else if (board[1] === turn && board[4] === turn && board[7] === turn) {
    winner = true
  } else if (board[2] === turn && board[5] === turn && board[8] === turn) {
    winner = true
  } else if (board[0] === turn && board[4] === turn && board[8] === turn) {
    winner = true
  } else if (board[2] === turn && board[4] === turn && board[6] === turn) {
    winner = true
  }
}

const checkForTie = () => {
  if (winner === true) {
    return
  }
  if (board.includes('') === false) {
  tie = true
}
} 



const switchPlayerTurn = () => {
  if (winner === true) {
    return
  }

  if (turn === 'X') {
    turn = 'O'
  } else {
    turn = 'X'
  }
}

const handleClick = (index) => {
  if (board[index] === '' && winner === false && tie === false) {
    board[index] = turn
    checkForWinner()
    checkForTie()
    switchPlayerTurn()
    showGame()
  }
}



/*----------------------------- Event Listeners -----------------------------*/
squareEl0.addEventListener('click', () => {
  handleClick(0)
})

squareEl1.addEventListener('click', () => {
  handleClick(1)
})

squareEl2.addEventListener('click', () => {
  handleClick(2)
})

squareEl3.addEventListener('click', () => {
  handleClick(3)
})

squareEl4.addEventListener('click', () => {
  handleClick(4)
})

squareEl5.addEventListener('click', () => {
  handleClick(5)
})

squareEl6.addEventListener('click', () => {
  handleClick(6)
})

squareEl7.addEventListener('click', () => {
  handleClick(7)
})

squareEl8.addEventListener('click', () => {
  handleClick(8)
})

resetBtnEl.addEventListener('click', resetGame)

resetGame()