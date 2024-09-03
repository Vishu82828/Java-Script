function cal(){
    const num1 = parseInt(document.getElementById('number1').value)
    const num2 = parseInt(document.getElementById('number2').value)
    num3 = num1+num2
    const ans = document.getElementById('answer')
    ans.innerHTML = num3
    return false
}

function add2(){
    const num1 = parseInt(document.getElementById('number1').value)
    const num2 = parseInt(document.getElementById('number2').value)
    const add = num1+num2
    const ans = document.getElementById('answer')
    ans.innerHTML = num3

    return false 
}
function sub(){
    const num1 = parseInt(document.getElementById('number1').value)
    const num2 = parseInt(document.getElementById('number2').value)
    const sub = num1-num2
    const ans = document.getElementById('answer')
    ans.innerHTML = sub

    return false
}
function mul(){
    const num1 = parseInt(document.getElementById('number1').value)
    const num2 = parseInt(document.getElementById('number2').value)
    const mul = num1*num2
    const ans = document.getElementById('answer')
    ans.innerHTML = mul

    return false
}
function div(){
    const num1 = parseInt(document.getElementById('number1').value)
    const num2 = parseInt(document.getElementById('number2').value)
    const div = num1%num2
    const ans = document.getElementById('answer')
    ans.innerHTML = div

    return false
}