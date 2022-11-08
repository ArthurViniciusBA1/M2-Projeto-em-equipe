import { abrirModal, modalAtualizarPerfil } from "../../scripts/modal.js";
import { meuPerfil } from "../../scripts/request.js";

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

  const token = JSON.parse(localStorage.getItem('token'))
  const perfilInfo = await meuPerfil(token)
  console.log(perfilInfo)

  botaoAttPerfil.addEventListener("click", () => abrirModal(modalAtualizarPerfil(perfilInfo)));
}

botaoHomeEvent();
botaoLogoutEvent();
atualizarPerfilEvent();
