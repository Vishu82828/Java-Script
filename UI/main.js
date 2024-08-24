document.getElementById('btn').addEventListener("click",add);

function add(e){
    e.preventDefault();

    const username = document.getElementById('username').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const confirmpassword = document.getElementById('psw').value

    if(username === ""|| email === "" || password === "" || confirmpassword === ""){
        alert("All field are mandatory");
        return;
    }

    if(password != confirmpassword){
        alert("password doesnt match")
        return;
    }

    // set data to localstorage
    localStorage.setItem("username",username)
    localStorage.setItem("email",email)
    localStorage.setItem("password",password)

    //redirect to login
    window.location.href = "login.html"

}