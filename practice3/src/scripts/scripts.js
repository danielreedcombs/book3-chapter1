const power= document.querySelector("#flight")

document.querySelector("#activate-flight").addEventListener("click", () => {
function flightHandlerFunction (){
    power.classList.remove("disabled")
    power.classList.add("enabled")
}
flightHandlerFunction()
})
