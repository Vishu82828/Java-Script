// let an = Math.pow(3,2)
// console.log(an)

// console.log(Math.sqrt(25));

// console.log(Math.PI)

// console.log(Math.max(1,6,3,8,2,65,86,32,7))

// console.log(Math.min(1,6,3,8,2,65,86,32,7))

// console.log(Math.trunc(120.3648767))

// console.log(Math.floor(4.67866))

// let bd = document.getElementById("input")
// let x = Math.random()*10+1
// document.getElementById("btn").addEventListener("click",(e)=>`

// <h1> ${x} </h1>

// `, bd.innerHTML = e
// )

let bd = document.getElementById("input");
let x = Math.floor(Math.random() * 10 + 1);
document.getElementById("btn").addEventListener("click", () => {
    bd.innerHTML = `<h1>${x}</h1>`;
});
