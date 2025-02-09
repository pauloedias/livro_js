//referencia o form e o h3 onde será exibida a resposta
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

//adiciona um "ouvinte" que é ativado ao clicar no botão submit
frm.addEventListener("submit", (e) => {
    e.preventDefault() //evita o envio do form
    const numero = Number(frm.inNumero.value) //obtém número digitado no form
    const raiz = Math.sqrt(numero)            //calcula raiz quadrada do número

    if (raiz == raiz.toFixed(0)) {
        resp.innerText = `A raiz quadrada de ${numero} é ${raiz}!`
    } else {
        resp.innerText = `Não há raiz exata para o número ${numero}!`
    }
})