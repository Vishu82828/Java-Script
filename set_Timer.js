// setTimeout(()=>{document.write('hello'),2000}) 

// let time = date.toLocaleTimeString()
// console.log(time)

setInterval(() => {
    let show = document.querySelector('h1')
        let date = new Date()
        let time = date.toLocaleTimeString()
        console.log(time);
        show.innerHTML = time
    },1000
)
// why index start from 0: