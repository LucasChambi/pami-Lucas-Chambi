//funcao que retorna tipos
function saudacao(nome: string): string {
    return `Olá, ${nome}!`;
}

console.log(saudacao('Leandro'));

//interface para objeto Usuario
interface Usuario {
    nome: string;
    idade: number;
    email?: string; //opcional
}

//utilizando a interface usuario fica assim:
function exibirUsuario(usuario: Usuario): void {
    console.log(`Nome: ${usuario.nome}`);
    console.log(`Idade: ${usuario.idade}`);
}

exibirUsuario({ nome: 'Marcos', idade: 22 });

//exemplo de uma funcao que retorna array e tem parametro opcional
function listarNomes(nomes: string[]): void {
    nomes.forEach(nome => console.log(nome));
}

listarNomes(['Ana', 'Carlos', 'Bruno']);