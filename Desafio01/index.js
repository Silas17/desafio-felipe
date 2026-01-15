let nome = "player1";
let xpLevel = 5213;

if (xpLevel < 1000) {
  console.log(`${nome} esta no Ferro`);
} else if (xpLevel >= 1001 && xpLevel < 2000) {
  console.log(`${nome} esta no Bronze`);
} else if (xpLevel >= 2001 && xpLevel < 5000) {
  console.log(`${nome} esta no Prata`);
} else if (xpLevel >= 5001 && xpLevel < 7000) {
  console.log(`${nome} esta no Ouro`);
} else if (xpLevel >= 7001 && xpLevel < 8000) {
  console.log(`${nome} esta no Platina`);
} else if (xpLevel >= 8001 && xpLevel < 9000) {
  console.log(`${nome} esta no Ascendente`);
} else if (xpLevel >= 9001 && xpLevel < 10000) {
  console.log(`${nome} esta no Imortal`);
} else if (xpLevel >= 10001) {
  console.log(`${nome} esta no Radiante`);
}