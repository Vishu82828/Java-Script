function getData(){
    const name = document.getElementById('Name').value
    const adress = document.getElementById('Address').value
    const contact = document.getElementById('Contact').value
    const email = document.getElementById('Email').value
    const pass = document.getElementById('pass').value
    const cpass = document.getElementById('cpass').value

    if(name==""){
        alert("Please Enter Name")
        document.getElementById('Name').focus()
        return false
    }

    else if(adress==""){
        alert("Please Enter Address")
        document.getElementById('Address').focus()
        return false
    }

    else if(contact==""){
        alert("Please Enter Contact")
        document.getElementById('Contact').focus()
        return false
    }

    else if (contact.length<10 || contact.length>10){
        alert("contact should be 10 digit")
        document.getElementById('Contact').focus()
        return false
    }
    // isNaN = is not a number.
    else if(isNaN(contact)){
        alert('Please enter Number only')
        document.getElementById('Contact').focus()
        return false
    }

    else if(!(email.includes('@'))){
        alert('please enter valid email')
        document.getElementById('Email').focus()
        return false
    }

    else if(!(pass.match(/[@#$%^&*]/))){
        alert('Please use symbol in Password')
        document.getElementById('pass').focus()
        return false
    }

    else if(pass!=cpass){
        alert('Password doesnt match')
        document.getElementById('cpass').focus()
        return false
    }
} 