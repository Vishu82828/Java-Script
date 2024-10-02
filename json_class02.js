document.getElementById("btn").addEventListener("click",fet)

async function fet() {
    //alert("hii")
    let strdata = await fetch("http://localhost:3000/student")
    let res = await strdata.json()
    console.log(res)
}