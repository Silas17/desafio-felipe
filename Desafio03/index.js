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
    } 
    
}

let newPlayer = {player0:  createPlayer("Aragorn", 87, 0)};
console.log(newPlayer.player0);