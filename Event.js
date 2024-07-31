let c=0
let i = document.getElementById('count')
function inc(){
    c++
    i.innerHTML=c
}

function dec(){
    if(c>0){
        c--
        i.innerHTML=c
    }
}