var money = 10000;
var stock1Price = getRndInteger(25, 35);
var stock1Qty = 0;

console.log("You currently have $", money)
console.log("Stock 1 currently trades at $",stock1Price)
console.log("You currently have ",stock1Qty, " shares of stock #1")

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

var purchaseQTY = prompt("How many shares would you like to buy?", "1");


stock1Qty = purchaseQTY + stock1Qty;
money = money - (purchaseQTY * stock1Price)
console.log("You currently have $", money)
console.log("You currently have ",stock1Qty, " shares of stock #1")
