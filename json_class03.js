document.getElementById("btn").addEventListener("click",fetch_data)

async function fetch_data() {
    let stdata = await fetch("http://localhost:3000/student")
    let res = await stdata.json()
    console.log(res)
    let data_store = res.map((value)=>`
    
    <tr>
        <td>${value.id}</td>
        <td>${value.name}</td>
        <td>${value.username}</td>
        <td>${value.email}</td>
    </tr>    
    
    `).join("")
    document.getElementById("showdata").innerHTML = data_store
}

function insdata(){
    let frmdata = {
        id:document.getElementById("id").value,
        name:document.getElementById("name").value,
        username:document.getElementById("username").value,
        email:document.getElementById("email").value
    }

    fetch("http://localhost:3000/student",{
        method: 'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(frmdata)
    })
    .then(response=>alert("insert successfully !!!!"))
    .catch(t=>alert("error"))
}