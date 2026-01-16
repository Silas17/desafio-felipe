let nome = "player1";
let xpLevel = 5213;

switch (true) {
  let menssagem = `O jogador ${nome} possui ${xpLevel} pontos de experiência e é da categoria ${rank}`;
  case xpLevel < 1000:
    let rank = `Ferro`;
    console.log(menssagem);
  case xpLevel >= 1001 && xpLevel <= 2000:
    let rank = `Bronze`;
    console.log(menssagem);
  case xpLevel >= 2001 && xpLevel <= 3000:
    let rank = `Prata`;
    console.log(menssagem);
  case xpLevel >= 3001 && xpLevel <= 4000:
    let rank = `Ouro`;
    console.log(menssagem);
  case xpLevel >= 4001 && xpLevel <= 5000:
    let rank = `Platina`;
    console.log(menssagem);
  case xpLevel > 5000:
    let rank = `Diamante`;
    console.log(menssagem);

  }

