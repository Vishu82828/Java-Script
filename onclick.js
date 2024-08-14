function display(){
    let data = document.getElementById('demo1');
    data.style.backgroundColor = "pink";
    data.style.border= "3px solid black";

    data.innerHTML = 
    `
    <table>
    <tr>
    <th>Name</th>
    <th>City</th>
    <th>contact no</th>
    </tr>
    <tr>
    <td>John Doe</td>
    <td>Bhopal</td>
    <td>+915456438237</td>
    </tr>
    <table>
    `
}