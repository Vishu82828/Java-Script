// let a=0
// let s=0
// let i = document.getElementById('add')
// let j = document.getElementById('sub')
// function inc(){
//     a++
//     // a += 1
//     i.innerHTML=a
//     j.innerHTML=s
// }

// function dec(){
//     if(pr>0){
//         s--
//         // a -= 1
//         i.innerHTML=a
//         j.innerHTML=s
//     }
// }


function create(){
    let cs = 0
    if(cs==2){
        cont++
        alert('cant')
    }else{
    const bt = document.createElement('button')
    const bt_text = document.createTextNode('button created')
    bt.append(bt_text)

    const div = document.getElementById('cont')
    div.append(bt)
    }
}