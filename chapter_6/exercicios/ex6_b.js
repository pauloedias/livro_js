const frm = document.querySelector("form")
const lista = document.querySelector("#listaNumeros")
const verificaOrdemCrescente = document.querySelector("#verificaOrdemCrescente")

const listaNumeros = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const numero = frm.inNumero.value //obtém valores do form

    if (listaNumeros.includes(numero)){
        alert("Esse número já foi informado!")
    } else {
        listaNumeros.push(numero)  //adiciona o numero a lista_numeros
        frm.inNumero.value = ""
        frm.inNumero.focus()
        lista.innerText = `Números: ${listaNumeros.join(" , ")} `
    }
})


frm.btVerificarOrdem.addEventListener("click", () => {
    
    let listaCrescente = [...listaNumeros]
    listaCrescente.sort((a, b) => a - b)
    console.log(listaCrescente)
    console.log(listaNumeros)

    let entrada = true
    for (let i = 0; i < listaCrescente.length; i++){
        if(listaCrescente[i] != listaNumeros[i]){
            entrada = false
            break
        }
    } 

    console.log(entrada)

    if(entrada == true){
        verificaOrdemCrescente.innerText = "Está em ordem crescente"
    } else if(entrada == false){
        verificaOrdemCrescente.innerText = "Não está em ordem crescente"
    }

})