let Student = {
    name : abhishek,
    course : mca ,
    age : 23,
}

console.log(Student);

// Let make Constructor Function.
function Employee (name, age, employee_id, addresh){
    this.name = name 
    this.age = age
    this.employee_id = employee_id
    this.addresh = addresh
}

let x = new Employee ("abhishek",23,678,"bypass")