import { abrirModal, modalAtualizarPerfil, modalCadastrarPet } from "../../scripts/modal.js";
import { meuPerfil, meusPets } from "../../scripts/request.js";

const token = JSON.parse(localStorage.getItem("token"));
const dadosPessoais = document.querySelector(".dados");
const imagemPerfil = document.querySelector(".cabecalho img");

async function criarPerfil() {
  let perfil = await meuPerfil(token);
  let listaMeusPets = await meusPets(token);
  dadosPessoais.insertAdjacentHTML(
    "afterbegin",
    `
    <h2><span>Nome:</span> ${perfil.name}</h2>
    <h2><span>E-mail:</span> ${perfil.email}</h2>
    `
    );
    if (listaMeusPets.length == 0) {
        dadosPessoais.insertAdjacentHTML(
            "beforeend",
            `
            <h2>Você ainda não adotou nenhum pet</h2>
            `
            )
    } else if (listaMeusPets.length == 1) {
        dadosPessoais.insertAdjacentHTML(
            "beforeend",
            `
            <h2><span>Você adotou:</span> ${listaMeusPets.length} pet</h2>
            `
            )
    } else {
        dadosPessoais.insertAdjacentHTML(
            "beforeend",
            `
            <h2><span>Você adotou:</span> ${listaMeusPets.length} pets</h2>
            `
            )
    }
    imagemPerfil.src = perfil.avatar_url;
}

function botaoHomeEvent() {
  const botaoHome = document.querySelector("#botaoHome");

  botaoHome.addEventListener("click", () => {
    window.location.replace("../home/index.html");
  });
}

function botaoLogoutEvent() {
  const botaoLogout = document.querySelector("#botaoLogout");

  botaoLogout.addEventListener("click", () => {
    localStorage.removeItem("token");
    window.location.replace("../../index.html");
  });
}

async function atualizarPerfilEvent() {
  const botaoAttPerfil = document.querySelector("#atualizarInformacoes");

  const token = JSON.parse(localStorage.getItem("token"));
  const perfilInfo = await meuPerfil(token);

  botaoAttPerfil.addEventListener("click", () =>
    abrirModal(modalAtualizarPerfil(perfilInfo))
  );
}

function adotarPet() {
    const novoPet = document.querySelector("#cadastrarNovoPet")

    novoPet.addEventListener("click", () => {
        abrirModal(modalCadastrarPet())
    })

}

botaoHomeEvent();
botaoLogoutEvent();
atualizarPerfilEvent();
adotarPet()
criarPerfil();