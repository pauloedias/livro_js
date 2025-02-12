const frm = document.querySelector("form")
const resp = document.querySelector("pre")

let clubes = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const clube = frm.inClube.value

    clubes.push(clube)
    console.log(clubes)
    frm.btListarClubes.dispatchEvent(new Event("click"))
})


resposta = ""

frm.btListarClubes.addEventListener("click", () => {
    if(clubes.length == 0){
        alert("Não há clubes na lista!")
    }
    clubes.forEach(clube => {
        resposta += `${clube}\n`
    });
    resp.innerText = resposta
})
