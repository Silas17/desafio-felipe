
let vitorias = 123;
let derrotas = 40;
let rankins = ['Ferro', 'Bronze', 'Prata', 'Ouro', 'Diamante', 'Lendario', 'Imortal'];

numeberVitorias = calculateVictories(vitorias, derrotas);

function calculateVictories(vitorias, derrotas) {
    let calular = vitorias - derrotas;
    if (calular < 0) {
        console.log("O jogador não possui vitórias.");
        return 0;
    } else {
        return calular;
    }
}

switch (true) {
    case numeberVitorias >= 0 && numeberVitorias <= 10:
        console.log(`O Heroi esta em saldo de ${numeberVitorias} vitorias e esta no nivel: ${rankins[0]}`);
        break;
    case numeberVitorias >= 11 && numeberVitorias <= 20:
        console.log(`O Heroi esta em saldo de ${numeberVitorias} vitorias e esta no nivel: ${rankins[1]}`);
        break;
    case numeberVitorias >= 21 && numeberVitorias <= 50:
        console.log(`O Heroi esta em saldo de ${numeberVitorias} vitorias e esta no nivel: ${rankins[2]}`);
        break;
    case numeberVitorias >= 51 && numeberVitorias <= 80:
        console.log(`O Heroi esta em saldo de ${numeberVitorias} vitorias e esta no nivel: ${rankins[3]}`);
        break;
    case numeberVitorias >= 81 && numeberVitorias <= 90:
        console.log(`O Heroi esta em saldo de ${numeberVitorias} vitorias e esta no nivel: ${rankins[4]}`);
        break;
    case numeberVitorias >= 91 && numeberVitorias <= 100:
        console.log(`O Heroi esta em saldo de ${numeberVitorias} vitorias e esta no nivel: ${rankins[5]}`);
        break;
    case numeberVitorias >= 101:
        console.log(`O Heroi esta em saldo de ${numeberVitorias} vitorias e esta no nivel: ${rankins[6]}`);
        break;
}
    