const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        companion: {
            name: "Frank",
            type: "Flea",
            inventory: ["small hat", "sunglasses"]
        }
    },
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    }
}

// Console logs all the items in the adventurer's inventory
function logInventory(...inventoryList) {
    let itemString = "";
    for (const item of inventoryList) {
        itemString += item
    }
    console.log(itemString.replaceAll(","," "));
}

logInventory(adventurer.inventory);
adventurer.roll();