const mySymbol = Symbol("vishu")

const user = {
    name:"vishwajeet",
    age: 23,
    [mySymbol]: "mykey",
    gmail: "vishu@mySymbolmygmail.com",
    all_name : ["vishu","aniket","vishwajeet"] 
}

// console.log(user);
// console.log(typeof user[mySymbol]);

user.greeting = function(){
    // console.log(`Hello, ${this.name}`);
}
// console.log(user.greeting());

const course = {
    course_name : "javaScript",
    course_instructor: "hitish"
}

// console.log(`the name of my course instuctor is, ${course_instructor}`);
// console.log(course_instructor);
const {course_instructor: hBro} = course
// console.log(course_instructor);
console.log(hBro);