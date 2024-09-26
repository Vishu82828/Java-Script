// setItem is a function that set data on key value pair in LocalStorage


// let x = localStorage.getItem("Name")
// //console.log(x)
// document.write(x)

// localStorage.removeItem("Age")
// localStorage.clear()
localStorage.setItem("Name","Vishu")
localStorage.setItem("Age","23")
localStorage.setItem("Contact","8292924463")

let x = localStorage.getItem("Name")
let y = localStorage.getItem("Contact")
let z = localStorage.getItem("Age")


document.getElementById("name").innerHTML = x
document.getElementById("contact").innerHTML = y
document.getElementById("age").innerHTML = z

let ob = {
    name : "chai",
    price : 10
}
localStorage.setItem("ob",JSON.stringify(ob))
let o = JSON.parse(localStorage.getItem("ob"))
console.log(o)