import { adotaPet, meuPerfil, todosPets } from "../../scripts/request.js";

const token = localStorage.getItem('token')

async function renderizaCardsPets() {
  const listaPetsHtml = document.querySelector(".listaPets");
  const listaPets = await todosPets();
  const infoUsuario = await meuPerfil(JSON.parse(token));
  
  listaPets.forEach((pet) => criaCard(pet, infoUsuario.id, listaPetsHtml));
}

function criaCard(pet, idUsuario, listaHtml) {
    const bodyDoRequest = {
        pet_id: pet.id
    }

  const card = document.createElement("li");
  const figure = document.createElement("figure");
  const fotoPet = document.createElement("img");
  const sectionInfo = document.createElement("section");
  const divNomeEspecie = document.createElement("div");
  const nome = document.createElement("h2");
  const especie = document.createElement("p");
  const botaoAdotar = document.createElement("button");

  card.classList = "cardPet";
  figure.classList = "fotoPet";
  sectionInfo.classList = "infoPet";
  nome.classList = "nomePet";
  especie.classList = "especiePet";

  nome.innerText = pet.name;
  especie.innerText = pet.species;

  fotoPet.src = pet.avatar_url;
  fotoPet.alt = `Foto do ${pet.name} (${pet.species})`;

  if (pet.available_for_adoption) {
    botaoAdotar.innerText = "Me adota?";
    botaoAdotar.classList = "botaoAdocao meAdota";
    botaoAdotar.addEventListener('click', () => {
        adotaPet(token, bodyDoRequest)
    })
  } else {
    if (pet.guardian.id == idUsuario) {
      botaoAdotar.innerText = "Você já adotou\neste pet";
      botaoAdotar.classList = "botaoAdocao adotado";
      botaoAdotar.setAttribute("disabled", true);
    } else {
      botaoAdotar.innerText = "Indisponível";
      botaoAdotar.classList = "botaoAdocao indisponivel";
      botaoAdotar.setAttribute("disabled", true);
    }
  }

  divNomeEspecie.append(nome, especie);
  sectionInfo.append(divNomeEspecie, botaoAdotar);
  figure.append(fotoPet);
  card.append(figure, sectionInfo);
  listaHtml.append(card);
}

renderizaCardsPets();
