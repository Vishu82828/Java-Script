// let a = parseInt(prompt("enter last first no"));
// let b = parseInt(prompt("enter last second no"));
// let c = parseInt(prompt("enter start first no"));
// let d = parseInt(prompt("enter start second no"));
// let ar = [10,8,7,5]
// ar.push(a,b);
// ar.unshift(c,d)
// document.write(ar)

let ar = [10,8,7,5,4,3,2,1]
// let pt = ar.slice(1,3) //slice is use for trim from array

// splice add element to the array
let pt2 =ar.splice(1,6,1,2,3,"vishu")//(index, no of element, "adding element")
document.write(ar)
// document.write(ar)