//uma interface chamada Livro
interface Livro {
    titulo: string;
    autor: string;
    anoPublicacao: number;
}

//um objeto do tipo Livro e preencha com dados fictícios
const meuLivroFavorito: Livro = {
    titulo: "A Metamorfose",
    autor: "Franz Kafka",
    anoPublicacao: 1915
};

//uma função chamada exibirLivro que receba um Livro como parâmetro e exiba as informações
function exibirLivro(livro: Livro): void {
    console.log("--- Detalhes do Livro ---");
    console.log(`Título: ${livro.titulo}`);
    console.log(`Autor: ${livro.autor}`);
    console.log(`Ano de Publicação: ${livro.anoPublicacao}`);
    console.log("-------------------------");
}

//função para exibir as informações do livro
exibirLivro(meuLivroFavorito);