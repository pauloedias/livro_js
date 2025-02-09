//cria referência ao form e ao elemento h3 (onde será exibida a resposta)

const frm= document.querySelector("form")
const resp= document.querySelector("h3")

//cria um "ouvinte" de evento, acionado quando o botão submit é clicado

frm.addEventListener("submit", (e) => {
    const nome = "Paulo"  //obtém o nome digitado no form
    resp.innerText = `Olá ${nome}` //exibe a resposta ao programa
    e.preventDefault()  //evita o envio do form
})

