// Init vars
let symbols = ["x", "o"]
let board = ["", "", "", "", "", "", "", "", ""]
let ids = []
let player = 0
let gameOver = true
let noWin = false

//Mapping of victories
mappVictory = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function getSymbol(id) {

  if (!ids.includes(id)) {
    ids.push(id)

    let symbol = symbols[player]

    board[id] = symbol

    return symbol

  } else {
    return alert("ja esta preenchido")
  }
}

function verifyVictory() {
  for (let i = 0; i < mappVictory.length; i++) {

    let seq = mappVictory[i]

    let pos1 = seq[0]
    let pos2 = seq[1]
    let pos3 = seq[2]
    console.log(pos1, pos2, pos3);


    console.log("Rafa eu te amo" + board);

    if (board[pos1] == board[pos2] && board[pos1] == board[pos3] && board[pos1] != "") {
      return true
    }

  }
  if (!board.includes("")) {
    noWin = true
    return true
  }

  return false

}
