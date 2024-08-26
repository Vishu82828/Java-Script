const btn = document.querySelector("#btn1")

btn.onclick = (e) => {
    console.log('clicked')
    console.log(e.type)
    console.log(e.target)
    console.log(e.clientX)
    console.log(e.clientY)
}

const mode = document.querySelector("#mode")
const body = document.querySelector("body")
let currentMode = "light" //dark

mode.addEventListener("click", ()=>{
    if(currentMode === "light" ){
        currentMode = "dark";
        //document.querySelector("body").style.backgroundColor="black"
        body.classList.add("dark")
        body.classList.remove("light")
    } else {
        currentMode = "light";
        //document.querySelector("body").style.backgroundColor="white"
        body.classList.add("light")
        body.classList.remove("dark")
    }
    console.log(currentMode)
})