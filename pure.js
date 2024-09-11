// Call back Function
let bt = document.querySelector('#btn')
//bt.addEventListener('click',function(){alert("cliked")}) 

// setinterval is used to contine loop and set interval.
let count = 0;
//setInterval(()=>{console.log(count++)},2000)

//bt.addEventListener('click',setInterval(()=>{document.write("<h1>"+count++ +"</h1>")},2000))
// bt.addEventListener('click', () => {
//     setInterval(() => {
//         document.querySelector('h1').innerHTML = "<h1>" + count++ +"</h1>";
//     }, 2000);
// });

let stopp;
function counter(){
    let h1 = document.querySelector('#count')
    let n = 1
    stopp = setInterval(()=>{h1.innerHTML = n++},200)
}
function c_stop(){
    clearInterval(stopp)
}