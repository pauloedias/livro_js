const frm = document.querySelector("form")        //obtém os elementos
const resp2 = document.querySelector("#outResp1")
const resp1 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita o envio do form

    const dataInfracao = frm.inDataInfracao.value; // Obtém a data da infração do input
    const valorMulta = frm.inValorMulta.value;
    const diasDesconto = 90;
    let valorDesconto = 0

    // Converter a data para um objeto Date
    const data = new Date(dataInfracao);

    // Adicionar os dias de desconto
    data.setDate(data.getDate() + diasDesconto);

    // Formatar a nova data (data de pagamento) para exibição
    const dataPagamentoFormatada = data.toLocaleDateString("pt-BR");

    valorDesconto = valorMulta * 0.8

    // Exibir as informações na página
    resp2.innerText = `Data Limite para Pagamento com Desconto: ${dataPagamentoFormatada}`;
    resp1.innerText = `Valor Multa com Desconto (20%): ${valorDesconto}`
});
