let totalSold = 0;

for (let i = 0; i < inventory.length; i++) {
        totalSold += inventory[i].sold;
}

console.log(totalSold);

const tvsSold = document.getElementById('tvsSold');
tvsSold.textContent = `Er zijn in totaal ${totalSold} tv's verkocht.`

let totalBought = 0;

for (let i = 0; i < inventory.length; i++) {
        totalBought += inventory[i].originalStock;
}
console.log(totalBought);

const tvsBought = document.getElementById('tvsBought');
tvsBought.textContent = `Er zijn in totaal ${totalBought} tv's ingekocht.`

let totalToBeSold = 0;

for (let i = 0; i < inventory.length; i++) {
        totalToBeSold += (inventory[i].originalStock - inventory[i].sold);
}
console.log(totalToBeSold);

const tvsToBeSold = document.getElementById('tvsToBeSold');
tvsToBeSold.textContent = `Er moeten in totaal nog ${totalToBeSold} tv's worden verkocht.`
