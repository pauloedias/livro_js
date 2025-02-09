//referencia o form e os h3 onde serão exibidas as respostas
const frm = document.querySelector("form")
const resp1 = document.getElementById("outResp1")
const resp2 = document.getElementById("outResp2")

//adiciona o ouvinte ao botão submit
frm.addEventListener("submit", (e) => {
    e.preventDefault() //evita o envio do form

    //pega os inputs
    const valor = frm.inValor.value

    let troco
    //condições
    if (valor < 1){
        resp1.innerText = "Valor Insuficiente"
    } if (valor >= 1 & valor < 1.75) {
        resp1.innerText = "Tempo: 30 min"
        troco = valor - 1
        if(troco > 0){
            resp2.innerText = `Troco R$: ${troco.toFixed(2)}`
        }
    } if (valor >= 1.75 & valor < 3){
        resp1.innerText = "Tempo: 60 min"
        troco = valor - 1.75
        if(troco > 0) {
            resp2.innerText = `Troco R$: ${troco.toFixed(2)}`
        }
    } if (valor >= 3){
        resp1.innerText = "Tempo: 120 min"
        troco = valor - 3
        if(troco > 0){
            resp2.innerText = `Troco R$: ${troco.toFixed(2)}`
        }
    }
})