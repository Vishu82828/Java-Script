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

// let cs = 0
// function create(){

//     cs++
//     if(cs==1){
//         const bt = document.createElement('button')
//     const bt_text = document.createTextNode('button created')
//     bt.append(bt_text)

//     const div = document.getElementById('cont')
//     div.append(bt)
//     }
//     else{
//        alert("already")
//     }
// }

// function create() {
//     let cs = 0;
//     if (cs == 2) {
//         alert('Cannot create more buttons');
//     } else {
//         const bt = document.createElement('button');
//         const bt_text = document.createTextNode('Button created');
//         bt.appendChild(bt_text);

//         const div = document.getElementById('cont');
//         if (div) {
//             div.appendChild(bt);
//         } else {
//             console.error('Element with ID "cont" not found');
//         }
//     }
// }

const cs = 0
function inc(){
    cs++
    if(cs==2){
    const x = document.createElement('input')

    const div = document.getElementById('inp')
    div.append(x)
    } else {
        alert('no more input field')
    }
}