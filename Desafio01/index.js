let nome = "player1";
let xpLevel = 5213;
let vitorias = 5;
let ganhosPorVitoria = 300;

// Menssagem inicial
let menssagem = `O jogador ${nome} possui ${xpLevel} pontos de experiência e é da categoria:`;
let arreyLevels = ['Ferro', 'Bronze', 'Prata', 'Ouro', 'Platina', 'Ascendente', 'Imortal', 'Radiante'];

for (let i = 0; i <= vitorias; i++) {
  xpLevel += ganhosPorVitoria;
}
switch (true) {
  case xpLevel < 1000:
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

