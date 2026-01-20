
let vitorias = 123;
let derrotas = 500;

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

console.log("Número de vitórias calculadas: " + numeberVitorias);