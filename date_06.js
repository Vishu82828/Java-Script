//Filter()

/*let ar= [1,2,3,4,5,6,7,8,9,10]
let data=ar.filter((e)=>{return e%2==03})
console.log(data)*/



//spread opetaror ... se denote karte hai

/*let ar = [1,2,3]
let ar2 = [4,5,6]
let newarray = [...ar,...ar2]
console.log(newarray)*/

/*let ar = [1,2,3]
let ar2 = [4,5,6,...ar]
console.log(ar)*/

/*let [name,age,LOcation]=["priyanka",23,"bhopal"] //dstructingconcept  
console.log(name)*/


//2 object ko milkar naya object banao using spread operator 

//destructring object
// let ar=[empname,empd ] = ["vishu","hr"]
// console.log(empname);

//Array of Object is used to store multiple data on employee.
let employee = [
    {
        emp_name : "vishu",
        emp_age : 24
    },
    {
        emp_name : "aniket",
        emp_age : 20
    },
    {
        emp_name : "om",
        emp_age : 22
    },
    {
        emp_name : "ritiesh",
        emp_age : 23
    },
    {
        emp_name : "animesh",
        emp_age : 21
    }
]
//let y = employee.map((p)=>{return p.emp_name})
// let data=employee.filter((p)=>{return p.emp_age>22})
// console.log(data);

let ob = {emp_name:"ani",emp_age:25}
employee.push(ob)

console.log(employee)