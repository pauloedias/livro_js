const frm = document.querySelector("form")
const resp = document.querySelector("pre")

let clubes = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const clube = frm.inClube.value
    if (clubes.includes(clube)) {
        alert("Esse clube já está cadastrado!")
        return
    } else {
        clubes.push(clube)
        frm.btListarClubes.dispatchEvent(new Event("click"))
    }
})

frm.btListarClubes.addEventListener("click", () => {
    if(clubes.length == 0){
        alert("Não há clubes na lista!")
    }                                                                 
    resp.innerText = clubes.join("\n")
})

let resposta = ""
 
frm.btTabelaJogos.addEventListener("click", () => {
    if (clubes.length % 2 != 0) {
        alert("Número de clubes não é par!")
    }
    let lista_cortada = clubes.slice(((clubes.length)/2)); // Separa o vetor clubes em 2
    resposta = ""; // Limpa a resposta anterior
    for (let i = 0; i < (clubes.length)/2; i++) {           
        resposta += `${clubes[i]} x ${lista_cortada[((clubes.length/2) - 1) - i]}\n`;
    }

    resp.innerText = resposta; // Atualiza o texto no elemento com resp
})