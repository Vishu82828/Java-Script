// const image = document.getElementById('img')
// image.src = "img2.jpg" 

// function fun(){
//     alert("clicked")
// } 


// // chngColor.style.color = 'red'
// function chng(){
//     const chngColor = document.getElementById('name').style.color('red')
//     chngColor.setAttribute('style','color: red')
// }

function chng(color){
    document.body.style.backgroundColor = color
}

function heading(number) {
    let head = document.getElementById('head');
    if (number === '1') {
        document.getElementById('blue').style.padding = '5px'
        head.style.color = 'red';
        head.innerHTML = 'This is Blue Color :'
    } else if (number === '2') {
        document.getElementById('black').style.padding = '5px'
        head.style.color = 'white';
        head.innerHTML = 'This is Black Color :'
    } else if (number === '3') {
        document.getElementById('red').style.padding = '5px'
        head.style.color = 'yellow';
        head.innerHTML = 'This is Red color :'
    } else if (number === '4') {
        document.getElementById('green').style.padding = '5px'
        head.style.color = 'blue';
        head.innerHTML = 'This is Green Color :'
    } else if (number === '5'){
        document.getElementById('yellow').style.padding = '5px'
        head.style.color = 'green'
        head.innerHTML = 'This is Yellow Color and this is last :'
    }
}

function hover(){
    const hblue = document.getElementById('blue')
    hblue.style.padding = '5px'
}
function hover2(){
    const hblue = document.getElementById('blue')
    hblue.style = 'none'
}

// function heading(color){
//     let head = document.getElementById('head')
//     if(color==='blue'){
//     head.style.color('white')
//     } else if (color==='black'){
//         head.style.color('gray')
//     } else if (color==='red'){
//         head.style.color('green')
//     } else if (color==='green'){
//         head.style.color('red')
//     }
// }