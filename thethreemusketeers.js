//JS
var gold = Math.floor(Math.random() * 9)
var bomb = Math.floor(Math.random() * 9)
if(gold === bomb){
    bomb = Math.floor(Math.random() * 9)
}

const treasure = (location) => {
    if(location === gold) {
        document.getElementById(location).innerHTML = "🌧️"
        alert ("You Win!")
    } else if (location === bomb) {
        document.getElementById(location).innerHTML = "🦅"
        alert ("Sorry, You Lose!")
    } else {
        document.getElementById(location).innerHTML = "🌞"
    }
    //return alert(`${location} clicked. ${gold} is gold`)
  }
