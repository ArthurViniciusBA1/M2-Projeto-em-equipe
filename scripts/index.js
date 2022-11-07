import { receberForm } from "./inputs.js"

const formularioLogin = document.querySelector(".div-inputs")

formularioLogin.addEventListener("submit", (event) =>{
    event.preventDefault()
    let corpo = receberForm(formularioLogin.elements)
})