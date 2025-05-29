//retorna uma função
function produto(nomeProduto: string, precoProduto: number, produtoDisponivel: boolean): string {
    return `Produto: ${nomeProduto} - Preço: R$${precoProduto. toFixed(2)} - Disponivel: ${produtoDisponivel ? 'Sim' : 'Não'}`;
}

console.log(produto('Mouse', 59.90, true));

//output esperado: Produto: Mouse - Preco: R$59.90 - Disponivel: Sim