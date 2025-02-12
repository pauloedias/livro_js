const frm = document.querySelector("form") //obtem elementos da pagina
const resp = document.querySelector("pre")
const carros = []                          //declara vetor global

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const modelo = frm.inModelo.value          //obtém dados do form
    const preco = Number(frm.inPreco.value)
    carros.push({modelo, preco})               //adiciona dados ao vetor de objetos
    frm.inModelo.value = ""                    //limpa os campos do form
    frm.inPreco.value = ""
    inModelo.focus()                        //posiciona o cursor em inModelo
    //dispara um evento de click de btListar ( equivale a um click no botão da página)
    frm.btListar.dispatchEvent(new Event("click"))
})

frm.btListar.addEventListener("click", () => {                  //escuta clique em btListar
    if(carros.length == 0){                                     //se tamanho do vetor igual a 0
        alert("Não há carros na lista")
        return
    }

    //método reduce() concatena uma string, obtendo modelo e preço de cada veículo
    const lista = carros.reduce((acumulador, carro) =>
        acumulador + carro.modelo + " - R$: " + carro.preco.toFixed(2) + "\n", "")
    resp.innerText = `Lista dos Carros Cadastrados \n ${"-".repeat(40)}\n${lista}`
})

frm.btFiltrar.addEventListener("click", () => {
    const maximo = Number(prompt("Qual o valor máximo que o cliente deseja pagar?"))
    if (maximo == 0 || isNaN(maximo)) {             //se não informou o valor inválido
        return                                      //... retorna
    }
    //cria um novo vetor com os objetos que atendem a condição de filtro
    const carrosFilter = carros.filter(carro => carro.preco <= maximo)
    if (carrosFilter.length == 0) {
        alert("Não há carros com preço inferior ou igual ao solicitado")
        return
    }
    let lista = ""
    for (const carro of carrosFilter) {
        lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`
    }
    resp.innerText = `Carros até R$: ${maximo.toFixed(2)}\n${"-".repeat(40)}\n${lista}`
})