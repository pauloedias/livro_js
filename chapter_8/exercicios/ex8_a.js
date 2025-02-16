const frm = document.querySelector("form") //obtém os elementos
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault() //evita o envio do form

    const nome = frm.inNomeAtleta.value //obtem os valores dos inputs
    const idade = Number(frm.inIdade.value)

    const nomeTracos = retornarTracos(nome)
    const categoriaAluno = categorizarAluno(idade)

    resp.innerText = `${nome}\n${nomeTracos}\nCategoria: ${categoriaAluno}`
})

const retornarTracos = (nome) => {
    let string = ""
    const tamanho = nome.length //obtem o tamanho da string
    console.log(tamanho)
    for (let i = 0; i < tamanho; i++){
        if (nome[i] != " "){
            string += "-"
        } else if (nome[i] == " "){
            string += " "
        }
    }
    return string
}

const categorizarAluno = (idade) => { //categoriza Atleta de acordo com a idade e categoria correspondente
    let string
    if(idade <= 12){
        string = "Infantil"
    } else if (idade >= 13 && idade <= 18){
        string = "Juvenil"
    } else{
        string = "Adulto"
    }
    return string
}