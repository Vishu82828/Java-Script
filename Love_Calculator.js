function calLove(){
    let first_name = document.getElementById('your').value
    let sec_name = document.getElementById('love').value

    var n = Math.random()
    n = n*111
    n = Math.floor(n)
    console.log(n)

    let ans = document.createElement('h2')
    let ans_text = document.createTextNode(sec_name + " had "+ n +"%" +"Love for you")
    ans.appendChild(ans_text)

    let div = document.getElementById('form')
    div.appendChild(ans)

    return false
}
