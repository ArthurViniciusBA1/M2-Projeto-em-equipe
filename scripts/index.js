import { receberForm } from "./inputs.js"
import { abrirModal, modalCadastrar } from "./modal.js"
import { login, meusPets } from "./request.js"

const formularioLogin = document.querySelector(".formLogin")
const botaoCadastrar  = document.querySelector(".cadastrar")

formularioLogin.addEventListener("submit", (event) =>{
    event.preventDefault()
    let corpo = receberForm(formularioLogin.elements)
    login(corpo)
})

botaoCadastrar.addEventListener("click", () => {
    abrirModal(modalCadastrar())
})