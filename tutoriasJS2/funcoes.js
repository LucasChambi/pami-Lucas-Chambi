function somaSimples () { //função, receberá o valor da função e retornará o resultado atraves do console.log, e o parametro
    return 3 + 4
}
///////
console.log(somaSimples()) //faz print da função

function somaComParametro (n1, n2) {
    return n1 + n2 
}

console.log(somaComParametro(3, 4))
console.log(somaComParametro(10, 4))

//arrow function
//funcao anonima
const Potencia = (n, e) => {
    let results =  Math.pow(n, e)
    console.log(`${n} elevado a ${e} é ${results}`)
}
Potencia(200, 300)

/*função que calcule a media do aluno e exiba o resultado
media >= 6,00 = aprovado
media >= 4,00 || < 6,00 = recuperação
media < 4,00 reprovado*/

const ResultadoMedia = (n1, n2) => {
    let media = (n1 + n2)/2

    if(media < 4) {
        return 'Reprovado'
    } else if (media < 6.00) {
        return 'Recuperação'
    } else {
        return 'Aprovado'
    }
}

console.log(ResultadoMedia+(10, 10))

let day;

switch (media) {
  case 6.00:
    text = "aprovado";
    break;
  case 4.00:
    text = "recuperação";
    break;
  default:
    text = "Reprovado";

    console.log(media(6.00, 4.00))
}