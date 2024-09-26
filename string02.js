let ar_ob = [
    {
        name : "vishu",
        age : 23,
        school : "xyz"
    },
    {
        name : "abhi",
        age : 28,
        school : "faef"
    },
    {
        name : "aniket",
        age : 24,
        school : "abc"
    }
]

let y = document.getElementById("tbody")
let x = document.getElementById("btn")
x.addEventListener("click",()=>{ y.innerHTML = ar_ob.map((e)=>`
    
    <tr>
    <td> ${e.name} </td>
    <td> ${e.age} </td>
    <td> ${e.school} </td>
    </tr>
    
    `).join("")
})