//onload page
document.addEventListener('DOMContentLoaded', () => {

  let squares = document.querySelectorAll('.square')

  squares.forEach((square) => {
    square.addEventListener('click', insertSimbol)
  })

})
let test = document.getElementById("1")
function insertSimbol(event) {


  let id = event.target.id

  let div = document.getElementById(`${id.toString()}`)

  let symbol = getSymbol(id)

  try {

    div.innerHTML += `<div class="${symbol}"></div>`

    player = player == 0 ? 1 : 0

  } catch (e) {
    console.log(e)
  }
}
