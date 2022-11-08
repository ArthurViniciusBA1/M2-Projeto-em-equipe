import { receberForm } from "./inputs.js"
import { recebeLocalStorage } from "./localStorage.js";
import { cadastroUsuario, atualizarPerfil, cadastrarPet } from "./request.js"

const body = document.querySelector("body");

export const abrirModal = (children) => {
  const fundoDoModal = document.createElement("div");
  fundoDoModal.classList.add("fundo-do-modal");

  const modal = document.createElement("div");
  modal.classList = "modal";

  const bgModal = document.createElement("div");
  bgModal.classList.add("bg-modal");

  const btnFechar = document.createElement("button");
  btnFechar.classList.add("fechar-modal");

  btnFechar.innerText = "X";

  btnFechar.addEventListener("click", () => {
    fundoDoModal.remove();
  });

  modal.appendChild(btnFechar);
  bgModal.append(children);
  modal.append(bgModal);
  fundoDoModal.append(modal);
  body.appendChild(fundoDoModal);

  btnFechar.addEventListener("click", () => {
    fundoDoModal.remove();
  });

  modal.appendChild(btnFechar);
  bgModal.append(children);
  modal.append(bgModal);
  fundoDoModal.append(modal);
  body.appendChild(fundoDoModal);
};

export const modalCadastrar = () => {
  let formModal = document.createElement("form");
  formModal.classList.add("form-modal");

  formModal.insertAdjacentHTML(
    "afterbegin",
    `
        <h2>Cadastrar</h2>
            <input type="text" name="nome" id="name" placeholder="Nome" class="input-padrao" required>
            <input type="email" name="email" id="email" placeholder="E-mail" class="input-padrao" required>
            <input type="password" name="senha" id="password" placeholder="Senha" class="input-padrao" required>
            <input type="avatar" name="avatar" id="avatar_url" placeholder="Avatar"
            class="input-padrao" required>
        <button type="submit" class="buttonBrand1">Cadastrar</button>
    `
  );

  formModal.addEventListener("submit", (event) => {
    event.preventDefault();
    let corpo = receberForm(formModal.elements);
    cadastroUsuario(corpo);
  });

  return formModal;
};

export const fecharModal = (request) => {
  const modal = document.querySelector(".fundo-do-modal");

  if (request) {
    modal.remove();
  } else {
    console.log("Deu algum erro!");
  }
};

export const modalAtualizarPet = () => {
  let formModal = document.createElement("form");
  formModal.classList.add("form-modal");

  formModal.insertAdjacentHTML(
    "afterbegin",
    `
    <h2>Atualizar pet</h2>
    <input type="avatar" value=${name} name="nome" id="name" placeholder="Nome" class="input-padrao" required>
    <input type="text" value=${bread} name="bread" id="bread" placeholder="Raça" class="input-padrao" required>
    <input type="text" value=${species} name="especie" id="species" placeholder="Espécie" class="input-padrao" required>
    <input type="avatar" value=${avatar_url} name="avatar" id="avatar_url" placeholder="Avatar" class="input-padrao" required>
    <button type="submit" class="buttonBrand1">Atualizar</button>
    `
  );

  formModal.addEventListener("submit", (event) => {
    event.preventDefault();
    let corpo = receberForm(formModal.elements);
    atualizarPet(corpo);
  });

  return formModal;
};
export const modalCadastrarPet = () => {
  let formModal = document.createElement("form");
  formModal.classList.add("form-modal");

  formModal.insertAdjacentHTML(
    "afterbegin",
    `
    <h2>Cadastrar pet</h2>
            <input type="text" name="nome" id="name" placeholder="Nome" class="input-padrao" required>
            <input type="text" name="bread" id="bread" placeholder="Raça" class="input-padrao" required>
            <input type="text" name="species" id="species" placeholder="Espécie" class="input-padrao" required>
            <input type="avatar" name="avatar" id="avatar_url" placeholder="Avatar"
            class="input-padrao" required>
        <button type="submit" class="buttonBrand1">Cadastrar</button>
    `
  );

  formModal.addEventListener("submit", (event) => {
    event.preventDefault();
    let corpo = receberForm(formModal.elements);
    cadastrarPet(corpo);
  });

    return formModal
}

export const modalAtualizarPerfil = ({ name, avatar_url }) => {
  let formModal = document.createElement("form");
  formModal.classList.add("form-modal");

  formModal.insertAdjacentHTML(
    "afterbegin",
    `
        <h2>Atualizar perfil</h2>
            <input type="text" value=${name} name="nome" id="name" placeholder="Nome" class="input-padrao" required>
            <input type="avatar" value=${avatar_url} name="avatar" id="avatar_url" placeholder="Avatar"
            class="input-padrao" required>
        <button type="submit" class="buttonBrand1">Cadastrar</button>
    `)
    
    formModal.addEventListener("submit", async (event) => {
        event.preventDefault()
        let corpo = receberForm(formModal.elements)
        console.log(corpo)
        await atualizarPerfil(corpo)
    })
   
    return formModal
}

export const modalDeletarPerfil = () => {
  const token = recebeLocalStorage();
  let formModal = document.createElement("form");
  formModal.classList.add("form-modal");

  formModal.insertAdjacentHTML(
    "afterbegin",
    `
        <h2>Deseja mesmo deletar sua conta?</h2>
        <button type="button" id="btn-cancelar" class="buttonBrand1 buttonModal">Não desejo deletar minha conta</button>
        <button type="submit" id="btn-deletar" class="buttonBrand1 buttonModal">Quero deletar minha conta</button>
    `
  );

  formModal.addEventListener("submit", async (event) => {
    event.preventDefault();
    await deletarPerfil(token);
  });

  const elements = [...formModal.elements];
  elements.forEach((element) => {
    if (element.id == "btn-cancelar") {
      element.addEventListener("click", () => {
        const fundoModal = document.querySelector(".fundo-do-modal");
        fundoModal.remove();
      });
    }
  });

  return formModal;
};
