function numeroAleatorio() {
    return Math.floor(Math.random() * (7 - 1) + 1)
}

function gerarCaminhoAleatorio(){
    return `../assets/img/randomBackground/random-pet-${numeroAleatorio()}.svg`
}

export {
    gerarCaminhoAleatorio,
}