const frm = document.querySelector("form")
const resp1 = document.querySelector("pre")

const clubes = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()           //evita o envio do form

    let clube = frm.inClube.value //obtém o clube a ser adicionado
    clubes.push(clube)             //adiciona o clube ao vetor clubes

    if (clubes.includes(clube)){
        console.log("Clube adicionado com sucesso")
    }
})
