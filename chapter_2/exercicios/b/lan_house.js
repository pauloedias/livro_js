//cria referência ao form e ao h3 (onde vai ser exibida a resposta)
const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")

//cria o "ouvinte" que vai ser acionado quando for clicado no botão
frm.addEventListener("submit", (e) =>{
    const valor = frm.inValor.value //obtém os valores dos campos
    const tempo = frm.inTempo.value

    const valor_a_pagar = valor * Math.ceil(tempo / 15) //cálculo para contar todas as frações de 15 min como tempo inteiro

    resp1.innerText = `Valor a Pagar R$ ${valor_a_pagar.toFixed(2)}` //Texto a ser exibido no h3

    e.preventDefault() //previne que a página seja atualizada quando o submit é enviado
})