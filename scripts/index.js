import { receberForm } from "./inputs.js"
import { abrirModal, modalCadastrar } from "./modal.js"
import { login } from "./request.js"

const formularioLogin = document.querySelector(".formLogin")

formularioLogin.addEventListener("submit", (event) =>{
    event.preventDefault()
    let corpo = receberForm(formularioLogin.elements)
    login(corpo)
})

abrirModal(modalCadastrar())