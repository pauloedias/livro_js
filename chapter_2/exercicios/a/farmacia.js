//cria referência ao form e aos h3 (onde serão exibidas as respostas)
const frm = document.querySelector("form")
const resp1 = document.getElementById("outResp1")
const resp2 = document.getElementById("outResp2")

//cria o ouvinte que vai ser acionado ao clicar no botão

frm.addEventListener("submit", (e) => {
    const medicamento = frm.inMedicamento.value //obtém os valores dos campos
    const preco = Number(frm.inPreco.value)

    const preco_promo = Math.trunc(preco * 2) //subtrai os decimais do valor total, gerando o desconto

    resp1.innerText = `Promoção de ${medicamento}` //insere o retorno dos campos
    resp2.innerText = `Leve 2 por apenas R$ ${preco_promo.toFixed(2)}`

    e.preventDefault() //previne o envio do submit
})