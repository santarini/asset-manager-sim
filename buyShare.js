var money = 10000;
var stock1 = "GOOG";
var stock1Price = getRndInteger(25, 35);
var stock1Qty = 0;

console.log("You currently have $", money)
console.log("Stock 1 currently trades at $",stock1Price)
console.log("You currently have ",stock1Qty, " shares of stock #1")

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function purchase(stock){
var purchaseQty = prompt("How many shares of", stock ," would you like to buy?", "0");
var purchaseQtyInt = parseInt(purchaseQty)
//this is concatenating for some reason
stock1Qty = purchaseQTY + stock1Qty;
    
money = money - (purchaseQtyInt * stock1Price)
console.log("You currently have $", money)
console.log("You currently have ", purchaseQtyInt, " shares of", stock)  
}

