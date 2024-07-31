let pr=0
let it=0
let i = document.getElementById('price')
let j = document.getElementById('item')
function inc(){
    it++
    pr += 500
    i.innerHTML=pr
    j.innerHTML=it
}

function dec(){
    if(pr>0){
        it--
        pr -=500
        i.innerHTML=pr
        j.innerHTML=it
    }
}