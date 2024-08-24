// const rewrite = document.getElementById('home').innerText = "Home";

// const boxs = document.querySelectorAll('.box')
// console.log(boxs);

// const newHeading = document.createElement("h2")
// newHeading.innerText="hii, im new";

// document.getElementsById("navbar").prepend(newHeading);
// newHeading.style.color="red";
//document.getElementById("boxes").append(newHeading);
//document.querySelector("body").prepend(newHeading);

const newBtn = document.createElement("button");
document.getElementById("boxes").prepend(newBtn)

newBtn.innerText="click me"
newBtn.style.backgroundColor="red";
newBtn.style.padding="10px"