import { recebeLocalStorage } from "./localStorage.js"
import { fecharModal } from "./modal.js"

let urlBase = "https://m2-api-adot-pet.herokuapp.com"
let headers = {
    "Content-Type": "application/json"
}

export async function cadastroUsuario(usuario) {
    try {
        let novoUsuario = await fetch(`${urlBase}/users`, {
                method: "POST",
                headers: headers, 
                body: JSON.stringify(usuario)
        })

        let novoUsuarioJson = await novoUsuario.json()

        fecharModal(novoUsuario.ok)

        return novoUsuarioJson

    } catch (err) {
        console.log(err)
    }
}

export async function login(usuario) {
    try {
        let login = await fetch(`${urlBase}/session/login`, {
                method: "POST",
                headers: headers, 
                body: JSON.stringify(usuario)
        })

        let loginJson = await login.json()
        localStorage.setItem("token", JSON.stringify(loginJson.token))
        
        window.location.replace('../pages/home/index.html')

        return loginJson

    } catch (err) {
        console.log(err)
    }
}

export async function meuPerfil(token) {
    try {
        let infoPessoal = await fetch(`${urlBase}/users/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        let infoJson = await infoPessoal.json()

        return infoJson
    } catch (err) {
        console.log(err)
    }
}

export async function todosPets(token) {
    try {
        let pets = await fetch(`${urlBase}/pets`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        let petsJson = await pets.json()

        return petsJson
    } catch (err) {
        console.log(err)
    }
}

export async function meusPets(token) {
    try {
        let pets = await fetch(`${urlBase}/pets/my_pets`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        let petsJson = await pets.json()

        return petsJson
    } catch (err) {
        console.log(err)
    }
}

export async function adotaPet(token, body) {
    try {
        let adotar = await fetch('https://m2-api-adot-pet.herokuapp.com/adoptions', {
                method: "POST",
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${JSON.parse(token)}`
                },
                body: JSON.stringify(body)
        })

        await adotar.json()

        window.location.reload()

    } catch (err) {
        console.log(err)
    }
}

export async function atualizarPerfil(body) {
    try {
        let token = recebeLocalStorage()
        console.log(token)
        let atualiza = await fetch('https://m2-api-adot-pet.herokuapp.com/users/profile', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(body)
        })

        await atualiza.json()

        window.location.reload()
    } catch(err) {
        console.log(err)
    }
}

export async function deletarPerfil(token) {
    try {
        let deleta = await fetch('https://m2-api-adot-pet.herokuapp.com/users/profile', {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${JSON.parse(token)}`
            }
        })

        await deleta.json()

        window.location.replace('../index.html')

    } catch(err) {
        console.log(err)
    }
}

export async function cadastrarPet(token, body) {
    try {
        let cadastraPet = await fetch('https://m2-api-adot-pet.herokuapp.com/users/profile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${JSON.parse(token)}`
            },
            body: JSON.stringify(body)
        })

        await cadastraPet.json()

        window.location.reload()

    } catch(err) {
        console.log(err)
    }
}

export async function atualizarPet(token, body, idPet) {
    try {
        let atualizaPet = await fetch(`https://m2-api-adot-pet.herokuapp.com/users/profhttps://m2-api-adot-pet.herokuapp.com/pets/${idPet}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${JSON.parse(token)}`
            },
            body: JSON.stringify(body)
        })

        await atualizaPet.json()

        window.location.reload()

    } catch(err) {
        console.log(err)
    }
}

export async function deletarPet(token, idPet) {
    try {
        let deletaPet = await fetch(`https://m2-api-adot-pet.herokuapp.com/users/profhttps://m2-api-adot-pet.herokuapp.com/pets/${idPet}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${JSON.parse(token)}`
            },
        })

        await deletaPet.json()

        window.location.reload()

    } catch(err) {
        console.log(err)
    }
}