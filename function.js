// let n = [1,2,3,4,5,6,7]
// n.push(8); //add value in last
// n.pop();  //remove last element
// n.unshift("vishu"); //add element in first index of array
// n.shift(); // remove starting element of array
// document.write(n)

// function sum(){
//     let a = parseInt(prompt("enter first no"))
//     let b = parseInt(prompt("enter first no"))
//     alert(a+b)
//     return a+b
// }

// alert (sum());
// let c = sum()
// alert(c*c)

// without parameter & no return value 
// without para & return value 
// with parameter & with return value 
// with para & no return value 
// user defined and predefined.
// declaration-defination- function calling

// function show(){
//     alert("hello");
// }

// show();

// function areaOfCircle(){
//     let pi = 3.14
//     let r = parseInt(prompt("enter R"))
//     let area = pi*r*r
//     return area;
// }

// console.log(areaOfCircle());

// function cybrom(){
//     return "placement";
// }

// console.log(cybrom());

//write a proogram return area of traingle

// function AreaOfTringle(){
//     const b = parseInt(prompt("enter b"))
//     const h = parseInt(prompt("enter h"))
//     const area = 1/2*b*h 
//     return area
// }

// area = AreaOfTringle()
// console.log(area)

// function demo(number){
//     console.log(number)
// }
// demo(90) 

// function evenOdd(n){
//     if(n/2==0){
//         console.log("odd")
//     }else {
//         console.log("even")
//     }
// }
// let n = parseInt(prompt("enter no to check even or odd "))
// console.log(evenOdd(n)) 

// arrow function always retuen value, if you use or not use it return. 
//Five type of arrow funtion - [ () => { } || () => ( ) || () => || => || => ( ) ]
    let fun = () => {return "aniket"}
    console.log(fun())

    let fun1 = (a,b) => (a+b)
    console.log("fun1 = "+fun1(1,2))

    let fun2 = (a,b) => a*b 
    console.log("fun2 = "+fun2(2,5))

    let fun3 = a => a*a*a
    console.log("fun3 = "+fun3(4))

    let fun4 = a => (a+8)
    console.log("fun4 = "+fun4(2))

    //call-back function is used to pass argument in function