export function receberForm(elementos) {
    let corpoApi = {}
    
    let elementosFormulario = [...elementos]

    elementosFormulario.forEach((elemento) => {
        if (elemento.tagName == "INPUT") {
            corpoApi[elemento.id] = elemento.value
        }
    })
    return corpoApi
}