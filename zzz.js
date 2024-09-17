let add = document.querySelector("#add")
let update = document.querySelector("#update")
let remove = document.querySelector("#remove")

let ar = [1,2,3]

add.addEventListener("click",add)
update.addEventListener("click",update)
remove.addEventListener("click",remove)

function add (){
    let x = parseInt(prompt("enter how many element do you want to enter : "))
    for(let i = 0; i<x; i++){
        let y = parseInt(prompt("Enter element " + (i+1) + ": "));
        ar.push(y);
    }
    console.log("Updated array: ", ar);
} 

function update(){
let u = parseInt(prompt("enter Index that you want to Change : "))
let z = parseInt(prompt("Enter what to change : "))
    ar[u] = z;
console.log("Updated array: ", ar);
}

function remove(){
    let r = parseInt(prompt("Enter the index from you want to remove"))
    let h = parseInt(prompt("Enter how many do you want remove"))
    ar.splice(r,h)
    console.log(ar)
}