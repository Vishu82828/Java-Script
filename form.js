// name, contact, age, email, pasword, confirm_pasword 
function saveData(){
    let Name = document.getElementById('name').value
    if(Name==""){
        alert("please fill name field")
        document.getElementById('name').focus()
        return false
    }
    let Contact = document.getElementById('contact').value;
    if(Contact==""){
        alert("please fill Contact field")
        document.getElementById('contact').focus()
        return false
    }
    let  Age = document.getElementById('age').value;
    if(Age==""){
        alert("please fill Age field")
        document.getElementById('age').focus()
        return false
    }
    let Email  = document.getElementById('email').value;
    if(Email==""){
        alert("please fill Email field")
        document.getElementById('email').focus()
        return false
    }
    let Password = document.getElementById('password').value;
    if(Password==""){
        alert("please fill Password field")
        document.getElementById('password').focus()
        return false
    }
    let  ConfirmPassword = document.getElementById('confirmPassword').value;
    if(ConfirmPassword==""){
        alert("please fill Confirm-Password field")
        document.getElementById('confirmPassword').focus()
        return false
    }
}