const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const frase = frm.inFrase.value //obtém o texto
    frase.trim()
    const tamanho = frase.length      //obtém o tamanho da string

    let inverso = ""

    for(i = tamanho - 1; i >= 0 ; i--){
        inverso += `${frase[i]}`
    }
    resp.innerText = inverso
    console.log(inverso)
})