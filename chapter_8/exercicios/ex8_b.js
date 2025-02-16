const frm = document.querySelector("form")//obtém elementos do form
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault() //evita envio do form

    const nome = frm.inNomeAluno.value //obtém o valor do input
    if(validarNome(nome) == true){
        const sobrenome = obterSobrenome(nome)
        const numeroVogais = contarVogais(nome)
        const senha = sobrenome + numeroVogais
    
        resp.innerText = `Senha Inicial: ${senha}`        
    } else {
        alert("Nome Inválido!")
    }

})

const validarNome = (nome) => {
    // Remove espaços no início e no final
    nome = nome.trim();

    // Verifica se há pelo menos duas palavras com letras, separadas por um espaço
    const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(\s+[A-Za-zÀ-ÖØ-öø-ÿ]+)+$/;

    return regex.test(nome); // Retorna true se for válido, false se não
};



const obterSobrenome = (nome) => {         //função para obter o sobrenome do nome
    let sobrenome = ""
    const tamanho = nome.length

    for(let i = tamanho - 1; i > 0; i--){    //obtém o sobrenome invertido
        if (nome[i] == " "){
            break
        } else{
            sobrenome += nome[i]
        }
    }

    tamanho2 = sobrenome.length              //desinverte o sobrenome
    let sobrenome2 = ""
    for(let i = tamanho2 - 1; i >= 0; i--){
        sobrenome2 += sobrenome[i]
    }
    return sobrenome2                       //retorna o sobrenome
}

const contarVogais = (nome) => {           //conta as vogais no nome e retorna o número de vogais
    let contador = 0
    const tamanho = nome.length
    for(let i = 0; i < tamanho; i++ ) {
        if (nome[i].toLowerCase() == "a" || nome[i].toLowerCase() == "e" || nome[i].toLowerCase() == "i" || nome[i].toLowerCase() == "o" || nome[i].toLowerCase() == "u"){
            contador += 1
        }
    }
    return String(contador).padStart(2, "0")
}