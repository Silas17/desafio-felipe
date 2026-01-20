
let ranking = player("player1", 123, 20);

function player(nome, victory, defeat) {
    let namePlayer = nome;
    let wins = victory - defeat;
    return namePlayer, wins;
}
console.log(ranking);