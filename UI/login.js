document.getElementById('login').addEventListener("click",display);

 function display(e){
    e.preventDefault();

    let username = document.getElementById("username").Value;
    let password = document.getElementById("password").Value;

    let storedusername = localStorage.getItem("username");
    let storedpassword = localStorage.getItem("password");

    if(username === storedusername && password === storedpassword){
        alert(`login successful, welcome ${storedusername}`);
        window.location.href = "welcome.html";
    }else {
        alert("Incorrect details");
    }
 }