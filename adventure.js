// Part 1
// const adventurer = {
//     name: "Robin",
//     health: 10,
//     inventory: ["sword", "potion", "artifact"],
//     companion: {
//         name: "Leo",
//         type: "Cat",
//         companion: {
//             name: "Frank",
//             type: "Flea",
//             inventory: ["small hat", "sunglasses"]
//         }
//     },
//     roll (mod = 0) {
//         const result = Math.floor(Math.random() * 20) + 1 + mod;
//         console.log(`${this.name} rolled a ${result}.`)
//     }
// }

// Console logs all the items in the adventurer's inventory
// function logInventory(...inventoryList) {
//     let itemString = "";
//     for (const item of inventoryList) {
//         itemString += item
//     }
//     console.log(itemString.replaceAll(","," "));
// }

// logInventory(adventurer.inventory);
// adventurer.roll();

// Part 2
class Character {
    constructor (name) {
      this.name = name;
      this.health = 100;
      this.inventory = [];
    }
    static maxHealth = 100;
    static roles = ["Fighter", "Healer", "Wizard"];

    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    }
}

// const robin = new Character("Robin");
// robin.inventory = ["sword", "potion", "artifact"];
// const leo = robin.companion = new Character("Leo");
// robin.companion.type = "Cat";
// const frank = robin.companion.companion = new Character("Frank");
// robin.companion.companion.type = "Flea";
// robin.companion.companion.inventory = ["small hat", "sunglasses"];

// robin.roll();
// leo.roll();
// frank.roll();

//Part 3
class Adventurer extends Character {
    constructor (name, role) {
      super(name);
      // Adventurers have specialized roles.
      this.role = Character.roles.find((characterRole) => characterRole == role);
      // Every adventurer starts with a bed and 50 gold coins.
      this.inventory.push("bedroll", "50 gold coins");
      // Adventurers can have compnions with them.
      this.companions = [];
    }
    // Adventurers have the ability to scout ahead of them.
    scout () {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
    // Adventurers can recruit other companions
    recruit (companion) {
        this.companions.push(companion);
        console.log(`${companion.name} has joined ${this.name}!`);
    }
}

class Companion extends Character {
    constructor (name, species) {
        super(name);
        this.species = species;
    }
}

const robin = new Adventurer ("Robin", "Fighter");
const leo = new Companion ("Leo", "Cat");
const frank = new Companion ("Frank", "Flea");
robin.recruit(leo);