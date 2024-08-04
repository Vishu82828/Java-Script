// name, contact, age, email, pasword, confirm_pasword 
function saveData(){
    let Name = document.getElementById('name').value;
    let Contact = document.getElementById('contact').value;
    let  Age = document.getElementById('age').value;
    let Email  = document.getElementById('email').value;
    let Password = document.getElementById('password').value;
    let  ConfirmPassword = document.getElementById('confirmPassword').value;
    if(Name==""){
        alert("please fill name field")
        document.getElementById('name').focus()
        return false
    }
   

    else if(Contact==""){
        alert("please fill Contact field")
        document.getElementById('contact').focus()
        return false
    }

    else if (isNaN(Contact)){
        alert("only digit")
        document.getElementById('Contact').focus()
        return false
    }

    else if (Contact.length<10 || Contact.length>10){
        alert("contact should be 10 digit")
        document.getElementById('Contact').focus()
        return false
    }
    
    else if (Age==""){
        alert("please fill Age field")
        document.getElementById('age').focus()
        return false
    }

    else if (isNaN(Age)){
        alert("only digit")
        document.getElementById('Age').focus()
        return false
    }
    
    else if(Email==""){
        alert("please fill Email field")
        document.getElementById('email').focus()
        return false
    }

    else if(!(Email.include('@'))){
        alert('incorrect email')
        document.getElementById('Email').focus()
        return false
    }
   
    else if(Password==""){
        alert("please fill Password field")
        document.getElementById('password').focus()
        return false
    }

    else if(!(pass.match[/#$%/])){
        alert("password should have #$%")
        document.getElementById('Password')
        return false
    }
   
    else if(ConfirmPassword==""){
        alert("please fill Confirm-Password field")
        document.getElementById('confirmPassword').focus()
        return false
    }

    else if(Password!=ConfirmPassword){
        alert('password missmatch')
        document.getElementById('ConfirmPassword').focus()
    }
}