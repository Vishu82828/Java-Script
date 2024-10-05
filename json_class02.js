document.getElementById("btn").addEventListener("click",fet)

async function fet() {
    //alert("hii")
    let strdata = await fetch("http://localhost:3000/student")
    let res = await strdata.json()
    //console.log(res);
    let ob = res.reduce((acc,cur)=>{
        acc[cur.name] = cur;
        return acc;
    },{});
    console.log(ob)
    document.getElementById("data").innerHTML = ob
}