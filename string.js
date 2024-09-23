// let x = "john"
// let y = "10"
// let z = "My name is \'john deo\' and he is john deo\'s friend\\";

// //console.log(`hello, my name is ${x}, My age is ${y},`);


// //  It’s great to meet you. As a fresher with a background in software engineering.

// let myData = `Hello everyone how are you all are you understand javascript!!`

// let a = "hello";

// a = "hello" + " " + "everyone";

// let b = a.concat(" ","everyone");

// //console.log(b);

// //document.getElementById("demo").innerHTML = y;

// let c = "hello everyone how you doing";
// let newString = c.slice(4,12)
// console.log(newString);

// console.log(c[2])
// console.log(c.at(4))
// console.log(c.charAt(6))
// console.log(c.charCodeAt(3))


let st = "hello" // this is my computer \n"
// let s = st.repeat(10)
// let s = st.replace("computer","laptop")  // replace all chng all the latter in sentace.
let s = st.split("")
let rev = s.reverse()  // reverse function is used in array.
//console.log(rev.join(""))  // join function is used in array.

let str1 = "WELCOME "
let str2 = "Home"
let r = str1.concat(str2)
//console.log(r)

let m = `Oriental `
let str3 = `Welcome to the 
    college ${m}`
//console.log(str3)    

let ar_ob = [
    {
        name : "vishu",
        age : 23,
        school : "xyz"
    },
    {
        name : "abhi",
        age : 28,
        school : "faef"
    },
    {
        name : "aniket",
        age : 24,
        school : "abc"
    }
]
// Tamplate Literals

let showdata = ar_ob.map((e)=>`

<input type="text" value = "${e.name}" >

`).join("")

document.getElementById('showdata').innerHTML = showdata