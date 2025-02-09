//Cria referência para o form e os h3(onde serão exibidas as respostas)
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

//cria o "ouvinte" que vai acionar a função quando o botão for clicado
frm.addEventListener("submit", (e) => {
    const produto = frm.inProduto.value //obtém os valores dos campos
    const preco = Number(frm.inPreco.value)

    const precoPromo = (2 * preco) + (preco * 0.5)
    const precoProduto3 = (preco * 0.5)

    resp1.innerText = `${produto} - Promoção: Leve 3 por R$: ${precoPromo.toFixed(2)}` //exibe a resposta
    resp2.innerText = `O 3º produto custa apenas R$: ${precoProduto3.toFixed(2)}`

    e.preventDefault() //evita o envio do form
})