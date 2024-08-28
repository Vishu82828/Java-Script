// function fun(num){
//     return num*num
// }

// const number = fun(4)
// console.log(number+5)

//write a program to find area of circle with argument and with return 
//check even or odd if even then make square and if odd print cube. 

function areaOfCircle(r){
    const area = 3.14*r*r
    if(area%2==0){
        return area*area
    }else {
        return area*area*area
    }
}

const r = parseInt(prompt("Enter radious"))
console.log(areaOfCircle(r)) 

