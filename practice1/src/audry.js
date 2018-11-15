// when someone clicks a button this function casues something to happen. 

function handleSectionClick(event){
console.log(event)
}
const message= document.querySelector("#message")
const mirror1= document.querySelector("#box1")
const mirror2= document.querySelector("#box2")
message.addEventListener("keyup",() => {
    mirror1.textContent= message.value
    mirror2.textContent= message.value 
})
