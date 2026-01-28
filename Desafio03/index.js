let player = {
    classType: {0: "Warrior", 1: "Ranger", 2: "Mage", 3: "Ninja"},
    }

function createPlayer(name, age, classType) {
    if (classType in player.classType) {
        return new Player(name, age, player.classType[classType]);
    } else {
        return "Invalid class type. Please choose a valid class type.";
        }
}
class Player {
    constructor(name, age, classType) {
        this.name = name;
        this.age = age;
        this.classType = classType;
        if(classType === "Warrior") {
            this.weapon = "Sword";
        } if(classType === "Ranger") {
            this.weapon = "Bow";
        } if(classType === "Mage") {
            this.weapon = "Staff";
        } if(classType === "Ninja") {   
            this.weapon = "Shuriken";
        }
    }
    scribe() {
        return `Name: ${this.name}, Age: ${this.age}, Class: ${this.classType}, Weapon: ${this.weapon}`;
    }
    atack() {
        return `${this.name} attacks with a ${this.weapon}!`;
    }
    playerList() {
        for (let key in newPlayer) {
            console.log(newPlayer[key].name);
        }
    }
}
let newPlayer = {
    player0:  createPlayer("Aragorn", 87, 0),
    player1:  createPlayer("Legolas", 2931, 1),
    player2:  createPlayer("Gandalf", 2019, 2),
    player3:  createPlayer("Naruto", 17, 3),
};

console.log(newPlayer.player0.playerList());
console.log(newPlayer.player0.scribe());
console.log(newPlayer.player0.atack());

