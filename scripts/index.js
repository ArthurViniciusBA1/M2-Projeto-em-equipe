import { receberForm } from "./inputs.js"
import { login } from "./request.js"

const formularioLogin = document.querySelector(".div-inputs")

formularioLogin.addEventListener("submit", (event) =>{
    event.preventDefault()
    let corpo = receberForm(formularioLogin.elements)
    login(corpo)
})