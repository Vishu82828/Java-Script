document.querySelector('#head').innerHTML = "bye"
document.querySelector('.para').style.backgroundColor = 'red'
document.querySelector('h3').style.color = 'blue'

const lis = document.querySelectorAll('li')
console.log(lis)
// index = 1
// if(index%2==0){
//     index++
//     lis.style.color = 'red'
//     if (index < lis.length) {
//         lis[index].style.color = 'red';
//     } else {
//         console.error('Index out of bounds');
//     }
// }
for(let i=0;i<=lis.length;i++){
    if(i%2==0){
        lis.style.color = 'red'
    }
}

