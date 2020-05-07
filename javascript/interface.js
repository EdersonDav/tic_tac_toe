//onload page
document.addEventListener('DOMContentLoaded', () => {
  
  let squares = document.querySelectorAll('.square')

  squares.forEach((square) => {
    square.addEventListener('click', insertSimbol)
  })

})

function insertSimbol(event) {


  let id = event.target.id

  let div = document.getElementById(`${id.toString()}`)

  let symbol = getSymbol(id)

  try {

    div.innerHTML += `<div class="${symbol}"></div>`

    endGame() 

    player = player == 0 ? 1 : 0

  } catch (e) {
    console.log(e)
  }
}

function endGame() {
  
  gameOver = verifyVictory()
    
  if(gameOver == true){

    let divW = document.getElementById("win")

    let button = document.getElementById("b")

    let spam = document.querySelector("spam")
    
    spam.style.display = "none"

    button.style.display = "none"

    divW.className = "win"

    if(noWin == true){

      divW.innerHTML = `<p>Oh no, not have winner</p>
                        <button onclick="reset()">Reset Game</button>`

    }else{

      divW.innerHTML = `<p>Game over, player ${player +1} win</p>
                        <button onclick="reset()">Reset Game</button>`

    }
   
  }
}

function reset(){
  document.location.reload(true);
}
