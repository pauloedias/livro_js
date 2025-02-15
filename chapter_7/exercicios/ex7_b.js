const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const frase = frm.inFrase.value //obtém o texto
    let fraseCompara = ""
    const tamanho = frase.length      //obtém o tamanho da string

    let inverso = ""

    for(i = 0 ; i < tamanho ; i++){
        if(frase[i] == " "){
            fraseCompara += ""
        } else {
            fraseCompara += frase[i].toLowerCase()
        }
    }

    console.log(fraseCompara)

    for(i = tamanho - 1; i >= 0 ; i--){
        if(frase[i] == " "){
            inverso += ``
        } else{
            inverso += `${frase[i]}` 
        }
    }
    resp.innerText = frase
    if(inverso.toLowerCase() == fraseCompara){
        resp.innerText += "\nÉ um Palíndromo"
    }
})