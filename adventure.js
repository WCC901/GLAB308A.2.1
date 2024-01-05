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

    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    }
}

const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
const leo = robin.companion = new Character("Leo");
robin.companion.type = "Cat";
const frank = robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

robin.roll();
leo.roll();
frank.roll();