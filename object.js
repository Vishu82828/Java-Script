// let ob = {key;value,}
// let ob = {id:101,name:"vishu",age:23}
// document.write(ob.name)

let emp = { id:101, name : "Vishu", age : 25, Contact : 8292927501, Addresh : "Zone II, MP nagar"}
// console.log(emp.name)
// for (let k in emp){
//     console.log(emp[k])//to print whole object 
// }

let emp1 = {nationality:"india"}

// let k = Object.values(emp)
// console.log(k[0])

Object.assign(emp,emp1)

delete emp.age 
// console.log(emp);

emp.designation = "manager"
console.log(emp);  

