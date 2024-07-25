// Document Object Model
// everything in html is know as Node
// Excess Member Operator
document.getElementById("head").innerHTML="vishu"
document.getElementById("head").style.backgroundColor="red"
document.getElementById("head").style.padding="20px"
document.getElementById("head").style.color="white"

let head = document.getElementById("head")
head.style.backgroundColor="tomato"
head.style.margin="20px"

let list = document.getElementsByTagName("li")
list[1].style.backgroundColor="green"


// i have a list inside it, it have 10 list attom. all even list background gray.