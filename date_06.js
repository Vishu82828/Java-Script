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
let {empname,empd } = { emp_name :"Priyanka",  emp_desi : "hr"}
console.log(empname)