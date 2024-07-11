// let n = parseInt(prompt("Enter no to check even"));
// if(n%2==0){
//     if(n%3==0){
//         alert("Number is even or divisible by 3")
//     }else{
//         alert("the number is even but not divisible by 3")
//     }
// }else{
//     alert("the number is not even")
// }

// Question 02
// take 3 input from the user and check 1 input is even or odd . check 1 input is even so multiply 1 & 2 input. Check 1 input is odd so add 3 of them.
// to check number is neutral or not
let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));
let num3 = parseFloat(prompt("Enter the third number:"));
function processInputs(num1, num2, num3) {
    if (num1 % 2 === 0) {
        let product = num1 * num2;
        alert(`The product of ${num1} and ${num2} is ${product}.`);
    } else {
        let sum = num1 + num2 + num3;
        alert(`The sum of ${num1}, ${num2}, and ${num3} is ${sum}.`);
    }
}

