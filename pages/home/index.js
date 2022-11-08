const botaoDrop = document.querySelector(".buttonDropdown")
const navegacao = document.querySelector("nav")


botaoDrop.addEventListener("click", () => {
    navegacao.classList.toggle("noShow")
})