// call back function or higher order function
// setInterval()

// function demo(()=> {1},2000){

// }

// demo()

let num = 1;
let fun = setInterval(()=>{
    if(num == 10){
        clearInterval(fun)
   }
    console.log(num++)
},2000)