// Init vars
// let board = ["","","","","","","","",""]
let ids = []
let player = 0
let symbols = ["x","o"]

function getSymbol(id){
  
  if(!ids.includes(id))
  {
    ids.push(id)

    player = player == 0 ? player = 1 : player = 0

    let symbol = symbols[player]
    
    return symbol
    
  }else{
    return alert("ja esta preenchido")
  }
  

}

// function handleMove(position){

//   if(board[position] == "")
//   {
//     board[position] = symbols[player] 
//   }

//   player = player == 0 ? player = 1 : player = 0

// }
