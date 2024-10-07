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
        <td><button onclick="mydel('${value.id}')">DElete</button></td>
        <td><button onclick="myedit('${value.id}')">Edit</button></td>
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
fetch_data()

function mydel(id){
    fetch(`http://localhost:3000/student/${id}`,{
        method:"DELETE"
    })
    .then(r=>alert("deleted"))
}

async function myedit(id) {
    let stdata = await fetch(`http://localhost:3000/student/${id}`);
    let data = await stdata.json();
    let frm = `
    <input type="text" value="${data.id}"><br><br>
    <input type="text" value="${data.name}"><br><br>
    <input type="text" value="${data.username}"><br><br>
    <input type="text" value="${data.email}"><br><br>
    <input type="submit" value="update">
    `;

    document.getElementById('demoo').innerHTML = frm;
}
