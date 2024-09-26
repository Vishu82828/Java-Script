// let b = document.getElementById('name').value
// let a = document.getElementById('age').value
// localStorage.setItem("name","n")
// localStorage.setItem("age","a")

// console.log(n)
// console.log(a)

function fun1(){
    let ob ={
        n : document.getElementById('name').value,
        a :  document.getElementById('age').value,
    }
    localStorage.setItem("data",JSON.stringify(ob))
}

let sdata = JSON.parse(localStorage.getItem('data'))
console.log(sdata)

document.getElementById("uname").innerHTML = sdata.n
document.getElementById("uage").innerHTML = sdata.a

document.getElementById("clear").addEventListener("click",()=>{
    localStorage.clear()
    location.reload()
})