//cria referencia ao form e aos elementos h3(respostas)
const frm = document.querySelector("form");
const resp1 = document.getElementById("outResp1");
const resp2 = document.getElementById("outResp2");
const resp3 = document.getElementById("outResp3");

//Adiciona um "escutador" de evento

frm.addEventListener("submit", (e) => {
    const veiculo = frm.inVeiculo.value; //obtém o conteúdo dos campos
    const preco = frm.inPreco.value;
    
    //cálculo das prestações
    const prestacao = (Number(preco) - (Number(preco*0.5)))/12;

    resp1.innerText = veiculo; //exibe as respostas
    resp2.innerText = `O valor da entrada é de R$ ${Number(preco*0.5).toFixed(2)}`;
    resp3.innerText = `O valor da prestação do carro é de 12x de R$ ${(prestacao).toFixed(2)}!`

    e.preventDefault();
});