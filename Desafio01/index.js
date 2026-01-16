let nome = "player1";
let vitorias = 123;
let derrotas = 500;
let xpVitoria = 80;
let xpDerrota = 30;
let arreyLevels = ['Ferro', 'Bronze', 'Prata', 'Ouro', 'Platina', 'Ascendente', 'Imortal', 'Radiante'];

if (vitorias === 0) {
  console.log("O jogador não possui vitórias.");
} else {
  let xpLevel = vitorias * xpVitoria - derrotas * xpDerrota;
  let partidas = vitorias + derrotas;
  
  if (xpLevel < 0) {
    xpLevel = 0;
  }
  let menssagem = `O jogador ${nome} possui ${xpLevel} pontos de experiência e um total de ${partidas} partidas e é da categoria:`;

  // Nao tenho ideia pra por um (for) aqui, entao usei um switch mesmo

  switch (true) {
    case xpLevel >= 0 && xpLevel <= 1000:
      console.log(menssagem + ` ${arreyLevels[0]}`);
      break;
    case xpLevel >= 1001 && xpLevel <= 2000:
      console.log(menssagem + ` ${arreyLevels[1]}`);
      break;
    case xpLevel >= 2001 && xpLevel <= 5000:
      console.log(menssagem + ` ${arreyLevels[2]}`);
      break;
    case xpLevel >= 5001 && xpLevel <= 7000:
      console.log(menssagem + ` ${arreyLevels[3]}`);
      break;
    case xpLevel >= 7001 && xpLevel <= 8000:
      console.log(menssagem + ` ${arreyLevels[4]}`);
      break;
    case xpLevel >= 8001 && xpLevel <= 9000:
      console.log(menssagem + ` ${arreyLevels[5]}`);
      break;
    case xpLevel >= 9001 && xpLevel <= 10000:
      console.log(menssagem + ` ${arreyLevels[6]}`);
      break;
    case xpLevel >= 10001:
      console.log(menssagem + ` ${arreyLevels[7]}`);
      break;
  }

}
