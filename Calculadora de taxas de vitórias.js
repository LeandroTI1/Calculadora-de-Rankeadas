function partidas(vitorias, derrotas){
    let taxaDeVitórias = prompt("Digite o número de vitórias:");
let porcentagemDeVitórias = parseInt(prompt("Digite a quantidade de vitórias:"));

// Utiliza estrutura de decisão para determinar o nível do herói
let taxaDeVitorias;

if (porcentagemDeVitorias < 10) {
    taxaDeVitorias = "Ferro";
} else if (porcentagemDeVitorias >= 11 && porcentagemDeVitórias <= 20) {
    taxaDeVitorias= "Bronze";
} else if (porcentagemDeVitorias >= 21 && porcentagemDeVitórias <= 50) {
    taxaDeVitorias = "Prata";
} else if (porcentagemDeVitorias >= 51 && porcentagemDeVitórias <= 80) {
    taxaDeVitorias = "Ouro";
} else if (porcentagemDeVitorias >= 81 && porcentagemDeVitórias <= 90) {
    taxaDeVitorias = "Diamante";
} else if (porcentagemDeVitorias >= 91 && porcentagemDeVitórias <= 100) {
    taxaDeVitorias = "Lendário";
} else if (porcentagemDeVitorias >= 101) {
    taxaDeVitorias = "Imortal";
} 
}
// Exibe a mensagem final
console.log("o porcentual de vitórias é + porcentualDeVitorias com  taxas de + taxasDeVitorias");

