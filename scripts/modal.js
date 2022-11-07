const body = document.querySelector('body')

export const abrirModal = (children) => {

    const fundoDoModal = document.createElement('div')
    fundoDoModal.classList.add('fundo-do-modal')

    const modal = document.createElement('div')
    modal.classList = 'modal'

    const bgModal = document.createElement('div')
    bgModal.classList.add('bg-modal')

    const btnFechar = document.createElement('button')
    btnFechar.classList.add('fechar-modal')

    btnFechar.innerText = 'X'

    btnFechar.addEventListener('click', () => {
        fundoDoModal.remove()
    })

    modal.appendChild(btnFechar)
    bgModal.append(children)
    modal.append(bgModal)
    fundoDoModal.append(modal)
    body.appendChild(fundoDoModal)
}

export const modalCadastrar = () => {

    let formModal = document.createElement('form')
    formModal.classList.add('form-modal')

    formModal.insertAdjacentHTML("afterbegin", `
        <h2>Cadastrar</h2>
            <input type="text" name="nome" id="name" placeholder="Nome" class="input-padrao">
            <input type="email" name="email" id="email" placeholder="E-mail" class="input-padrao">
            <input type="password" name="senha" id="password" placeholder="Senha" class="input-padrao">
            <input type="avatar" name="avatar" id="avatar-url" placeholder="Avatar"
            class="input-padrao">
        <button type="submit" class="botao-padrao">Cadastrar</button>

    `)
    return formModal
}

