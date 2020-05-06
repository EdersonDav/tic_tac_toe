//onload page
document.addEventListener('DOMContentLoaded', () =>{
  
  let squares = document.querySelectorAll('.square')

  squares.forEach((square)=>{
    square.addEventListener('click', insertSimbol)
  })

})

function insertSimbol(event){

  let id = event.target.id

  let div = document.getElementById(`${id}`)

  let symbol = getSymbol(id)

  div.innerHTML += `<div class="${symbol}"></div>`
}

// function handler (event){

//   let position = event.target.id

//   handleMove(position)

//   updateHTML()

// }

// function updateHTML(){

//   let squares = document.querySelectorAll('.square')

//   squares.forEach((square)=>{

//     let position = square.id
//     let symbol = board[position]

//     if(symbol != '')
//     {
//       square.innerHTML = `<div class="${symbol}"></div>`
//     }

//   })
// }
