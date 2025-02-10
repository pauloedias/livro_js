//obtém elementos da página
const frm = document.querySelector("form")
const resp = document.querySelector("pre")

//"escuta" evento submit do form
frm.addEventListener("submit", (e) => {
    e.preventDefault() //evita o envio do form
    const numero = Number(frm.inNumero.value) //obtém o número informado
    let resposta = ""                         //variável do tipo String, para concatenar a resposta
    //cria um laço de repetição (i começa em 1 e é incrementado até 10)
    for (let i = 1; i <= 10; i++) {
        //a variável resposta vai acumulando os novos conteúdos ( nos 2 formatos)
        resposta = resposta + numero + "x" + i + " = " + (numero * i) + "\n"
    }
    //o conteúdo da taga pre é alterado para exibir a tabuada do número
    resp.innerText = resposta
})