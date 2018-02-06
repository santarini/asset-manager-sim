var money = 10000;
var stock1Price = getRndInteger(25, 35);
var stock1Qty;

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

var purchaseQTY = prompt("How many shares would you like to buy?", "1");


stock1Qty = purchaseQTY + stock1Qty;
console.log(stock1Qty)


