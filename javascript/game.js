// Init vars
let ids = []
let player = 0
let symbols = ["x", "o"]
let gameOver = false

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

    return symbol

  } else {
    return alert("ja esta preenchido")
  }
}

// function verifyVictory(){
//   for(let mapp of mappVictory){
//     for(let map of mapp){
//       if(map == )
//     }
//   }
// }
