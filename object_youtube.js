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
    console.log(`Hello, ${this.name}`);
}
console.log(user.greeting());