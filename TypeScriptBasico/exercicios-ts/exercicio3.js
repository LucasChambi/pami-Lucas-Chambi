//um objeto do tipo Livro e preencha com dados fictícios
var meuLivroFavorito = {
    titulo: "A Metamorfose",
    autor: "Franz Kafka",
    anoPublicacao: 1915
};
//uma função chamada exibirLivro que receba um Livro como parâmetro e exiba as informações
function exibirLivro(livro) {
    console.log("--- Detalhes do Livro ---");
    console.log("T\u00EDtulo: ".concat(livro.titulo));
    console.log("Autor: ".concat(livro.autor));
    console.log("Ano de Publica\u00E7\u00E3o: ".concat(livro.anoPublicacao));
    console.log("-------------------------");
}
//função para exibir as informações do livro
exibirLivro(meuLivroFavorito);
