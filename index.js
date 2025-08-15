
let playerName = prompt("Welcome, apprentice! What's your name?");
let playerAge = Number(prompt("How old are you?"));
let favoriteElement = prompt("What's your favorite element? (fire, water, earth, air)").toLowerCase();

alert(`Welcome ${playerName}! At ${playerAge}, you're just the right age to master the powers of ${favoriteElement}!`);

let gold = 0;

let potions = ['Healing Potion', 'Mana Elixir', 'Invisibility Draft', 'Fire Resistance'];

let potionStock = {
    'Healing Potion': { quantity: 5, price: 10 },
    'Mana Elixir': { quantity: 3, price: 15 },
    'Invisibility Draft': { quantity: 2, price: 25 },
    'Fire Resistance': { quantity: 4, price: 20 }
};

let customersHelped = 0;

for (let i = 1; i <= 3; i++) {
    let takeOrder = prompt("A customer is here! Take their order? (yes/no)").toLowerCase();

    if (takeOrder === "yes") {
    
        let menu = potions.map((potion, index) => `${index + 1}. ${potion} - ${potionStock[potion].price} gold`).join("\n");
        let choice = prompt("Here is the potion menu:\n" + menu + "\nWhich potion does the customer want?");

    
        let selectedPotion = potions.find(p => p.toLowerCase() === choice.toLowerCase());

        if (selectedPotion) {
            if (potionStock[selectedPotion].quantity > 0) {
                potionStock[selectedPotion].quantity--;
                gold += potionStock[selectedPotion].price;
                alert(`The customer bought a ${selectedPotion}! You earned ${potionStock[selectedPotion].price} gold.`);
                customersHelped++;
            } else {
                alert(`Sorry! ${selectedPotion} is out of stock.`);
            }
        } else {
            alert("We don't have that potion.");
        }
    } else {
        alert("You skipped this customer.");
    }
}


let potionsBrewed = 0;
let brewTimes = 0;

while (brewTimes < 3) {
    let brewMore = prompt("Do you want to brew a potion? (yes/no)").toLowerCase();
    if (brewMore === "yes") {
        let brewChoice = prompt("Which potion do you want to brew?");
        let amount = Number(prompt("How many do you want to brew?"));

        let potionName = potions.find(p => p.toLowerCase() === brewChoice.toLowerCase());

        if (potionName && amount > 0) {
            potionStock[potionName].quantity += amount;
            alert(`You brewed ${amount} ${potionName}(s)!`);
            potionsBrewed += amount;
        } else {
            alert("Invalid potion or amount.");
        }
        brewTimes++;
    } else {
        break;
    }
}


let stockReport = potions.map(p => `${p}: ${potionStock[p].quantity} left`).join("\n");

alert(
`End of Day Report:
${stockReport}
You earned ${gold} gold.
Great job, ${playerName}! You brewed ${potionsBrewed} potions and helped ${customersHelped} customers today!`
);


