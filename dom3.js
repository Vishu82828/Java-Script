const heading = document.getElementById('demo')//.innerHTML = "hello"
// getElementById return single node 
heading.innerHTML = "hello.....!!!"
heading.style.backgroundColor = "green"
heading.style.padding = "20px"

const n = document.getElementsByClassName("name")
n[0].innerHTML = "my name is new one"
n[1].style.cssText="background-color: red; color: white; padding: 20px"
console.log(n)


// innerHTML can also change tag.
