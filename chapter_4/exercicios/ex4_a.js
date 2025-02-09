//cria referência ao form e o h3 onde será exibida a resposta
const frm = document.querySelector("form")
const h3 = document.querySelector("h3")

//cria o "ouvinte"
frm.addEventListener("submit", (e) => {
    e.preventDefault() //evita que o form seja enviado

    const numero = frm.inNumero.value //obtém o valor do input

    if(numero % 2 == 0) {
        h3.innerText= "É par!"
    } else{
        h3.innerText= "É ìmpar!"
    }
})
