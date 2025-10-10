const button= document.getElementById("pressBtn")
const input= document.getElementById("myText")
const header= document.getElementById("header")

button.addEventListener("click", () => {header.textContent=input.value})

