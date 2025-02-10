//referência o form e o h3 onde será apresentada a resposta
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

//"ouvinte"
frm.addEventListener("submit", (e) => {
    e.preventDefault() //evita que o form seja enviado

    const numero = Number(frm.inNumero.value) //obtém as infos dos inputs
    let resposta = `Entre ${numero} e 1: `
    for(let i = numero; i > 0; i--){
        resposta = resposta + i + ", "
    }
    resp.innerText = resposta
})