const frm = document.querySelector("form")
const lista = document.querySelector("pre")

candidatos = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()           //evita o envio do form
    const candidato = frm.inCandidato.value //obtem os valores do forms
    const acertos = frm.inAcertos.value

    candidatos.push({candidato, acertos})

    console.log(candidatos)
})


frm.btListarTodos.addEventListener("click", () => {
    resposta = ""
    candidatos.forEach(candidato => {
        resposta += (`Nome: ${candidato.candidato} - Acertos: ${candidato.acertos}\n`)
    });
    lista.innerText = resposta
})

frm.btAprovado.addEventListener("click", () => {
    if(candidatos.length == 0){
        alert("Não há candidatos cadastrados!")
    } else{
        canidatos = candidatos.sort((a, b) => b.acertos - a.acertos)
        resposta = ""
        const acertosAprovacao = prompt("Número de Acertos para Aprovação?")
        candidatos.forEach(candidato => {
            if(candidato.acertos >= acertosAprovacao){
                resposta += (`Nome: ${candidato.candidato} - Acertos: ${candidato.acertos}\n`)
            }
        });
        lista.innerText = ""
        lista.innerText = resposta                
    }
})