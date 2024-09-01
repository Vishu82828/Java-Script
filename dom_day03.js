// h2, paragraph
const  head02 = document.createElement("h2")
const head_text = document.createTextNode('hello world')
head02.append(head_text)

const div = document.getElementById('main')
div.append(head02)

// paragraph
const para = document.createElement("p")
console.log(para)
const para_text = document.createTextNode('this is paragraph')
para.append(para_text)

const div02 = document.getElementById('main')
div02.append(para)

//add attribuate in anchor tag
const anc = document.getElementById('anchor')
anc.setAttribute("href","https://www.bing.com")

const my = document.getElementById('comp')
my.setAttribute('style','background-color:green') 
