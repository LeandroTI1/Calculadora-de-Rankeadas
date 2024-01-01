//taxa de vitórias subtraindo as vitórias com as derrotas.
function taxaDeVitorias(vitorias, derrotas) {
    // Calcula o resultado das Rankeadas
    const totalDeVitorias = vitorias - derrotas;
  
    // Verifica o nível de vitórias
    let nivel;
  
    if (vitorias < 10) {
      nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
      nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
      nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
      nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
      nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
      nivel = "Lendário";
    } else {
      nivel = "Imortal";
    }
  
    // Retorna o resultado da taxa de vitórias e seu nível.
    return `O Herói tem um saldo de ${totalDeVitorias} está no nível de ${nivel}`;
  }
  
  // Exemplo de uso da função
  const totalDeVitorias = taxaDeVitorias(30, 10);
  console.log(totalDeVitorias);

