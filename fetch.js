//  Featch - it proferm 5 types of function i-get, ii-deleate, iii-put, iv-patch, v-post.
//  async await
// promice -> object -> accept -> reject
//console.log("hello") 

let x = document.getElementById("btn").addEventListener("click",fch)
async function fch(){
    let storerData = await fetch('https://jsonplaceholder.typicode.com/comments')
    let stringData = await storerData.json()
    //console.log(stringData);
    // let objData = stringData.reduce((acc, cur) => {
    //     acc[cur.id] = cur;
    //     return acc;
    // }, {});
    // console.log(objData);
    let em = stringData.map((e)=>{return e.email})
    console.log(em)
}