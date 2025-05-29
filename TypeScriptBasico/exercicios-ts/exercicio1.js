//retorna uma função
function produto(nomeProduto, precoProduto, produtoDisponivel) {
    return "Produto: ".concat(nomeProduto, " - Pre\u00E7o: R$").concat(precoProduto.toFixed(2), " - Disponivel: ").concat(produtoDisponivel ? 'Sim' : 'Não');
}
console.log(produto('Mouse', 59.90, true));
//output esperado: Produto: Mouse - Preco: R$59.90 - Disponivel: Sim
