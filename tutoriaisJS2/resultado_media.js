/*função que calcule a media do aluno e exiba o resultado
media >= 6,00 = aprovado
media >= 4,00 || < 6,00 = recuperação
media < 4,00 reprovado*/

const ResultadoMedia = (n1, n2) => {
    let media = (n1 + n2) / 2

    if (media < 4) {
        console.log("Reprovado")
    } else if (media < 6.00) {
        return "Recuperação"
    } else {
        return "Aprovado"
    }
}

console.log(ResultadoMedia(10, 10))
console.log(ResultadoMedia(5, 3))
console.log(ResultadoMedia(2, 2))