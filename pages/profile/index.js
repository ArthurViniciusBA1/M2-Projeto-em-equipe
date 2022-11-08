import { abrirModal, modalAtualizarPet } from "../../scripts/modal.js"
import { adotaPet, meusPetParaAdocao } from "../../scripts/request.js";

function criaCardPetProfile(pet) {

    const card = document.createElement("li");
    const figure = document.createElement("div");
    const fotoPet = document.createElement("img");
    const divCorpoCard = document.createElement("div");
    const nome = document.createElement("h3");
    const especie = document.createElement("h3");
    const adotavel = document.createElement("h3");
    const botaoAtualizar = document.createElement("button");
    const botaoDeletar = document.createElement("button");

    card.classList.add('cardPet2')
    figure.classList.add('caixaImagem')
    fotoPet.classList.add('bgImg')
    divCorpoCard.classList.add('corpoCard')
    botaoAtualizar.classList.add('buttonBrand1')
    botaoDeletar.classList.add('buttonBrand1')

    botaoAtualizar.id = "btn-atualizar";
    botaoDeletar.id = "btn-deletar";

    nome.innerText = `Nome: ${pet.name}`;
    especie.innerText = `Espécie: ${pet.species}`;

    if (pet.available_for_adoption) {
        adotavel.innerText = 'Adotável: Sim'
    } else {
        adotavel.innerText = 'Adotável: Não'
    }

    fotoPet.src = pet.avatar_url;
    fotoPet.alt = `Foto do ${pet.name} (${pet.species})`;

    botaoAtualizar.innerText = 'Atualziar'

    botaoDeletar.innerText = 'Deletar'

    figure.appendChild(fotoPet)
    divCorpoCard.append(nome, especie, adotavel, botaoAtualizar, botaoDeletar)
    card.append(figure, divCorpoCard)

    return card
}

async function renderizaCardPetProfile() {
    const ul = document.querySelector('.listaDePets')

    let localS = JSON.parse(localStorage.getItem('token'))

    let testpet = await meusPetParaAdocao(localS)


    if (testpet !== undefined){
        testpet.forEach(element => {
            ul.append(criaCardPetProfile(element))
    })}
    else{
        let textoVazio = document.createElement('h2')
        textoVazio.innerText = 'Sem Pets para adoção'
        ul.appendChild(textoVazio)
    }

}

renderizaCardPetProfile()