import { meuPerfil, meusPets } from "../../scripts/request.js"

const token = JSON.parse(localStorage.getItem("token"))
const dadosPessoais = document.querySelector(".dados")

let perfil = await meuPerfil(token)
let listaMeusPets = await meusPets(token)

dadosPessoais.insertAdjacentHTML("afterbegin", `
                <h2><span>Nome:</span> ${perfil.name}</h2>
                <h2><span>E-mail:</span> ${perfil.email}</h2>
                <h2><span>Você adotou:</span> ${listaMeusPets.length} pets</h2>
`)