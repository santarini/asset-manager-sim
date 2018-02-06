var money = 10000;
var stockMarketPrice = {GOOG:0, MSFT:0, AMZN:0, BOBA:0};
var stockMarketQty = {GOOG:0, MSFT:0, AMZN:0, BOBA:0};

//creates a random int
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

//randomize market prices
function marketChange(){
stockMarketPrice["GOOG"] = getRndInteger(200, 700);
stockMarketPrice["MSFT"] = getRndInteger(50, 300);
stockMarketPrice["AMZN"] = getRndInteger(300, 1500);
stockMarketPrice["BOBA"] = getRndInteger(1, 100);
document.getElementById("GOOGPrice").innerHTML = stockMarketPrice["GOOG"];
document.getElementById("MSFTPrice").innerHTML = stockMarketPrice["MSFT"];
document.getElementById("AMZNPrice").innerHTML = stockMarketPrice["AMZN"];
document.getElementById("BOBAPrice").innerHTML = stockMarketPrice["BOBA"];
}

function purchase(stock){
    var purchaseQty = prompt("How many shares of " + stock + " would you like to buy?", "0");
    var purchaseQtyInt = parseInt(purchaseQty);
    var totalTransaction;
    if (money == 0||money < purchaseQtyInt * stockMarketPrice[stock] ){
        alert("You don't have that enough money for that transaction.");
    }else if (purchaseQtyInt > 0){
        stockMarketQty[stock] = stockMarketQty[stock] + purchaseQtyInt;
        document.getElementById(stock + "QTY").innerHTML = stockMarketQty[stock];
        totalTransaction = (purchaseQtyInt * stockMarketPrice[stock]);
        money = money - totalTransaction;
        document.getElementById("money").innerHTML = "$ " + money;
        alert("Purchased " + purchaseQtyInt +" share of " + stock + " at $" + stockMarketPrice[stock] +" each.\n\nFor a total of $" + totalTransaction)
        alert("You currently have $" + money);
    }else if (purchaseQtyInt < 0){
        alert("It doesn't work like that...");
    }else{
        alert("Quit wasting my time.");
    }
}

function sell(stock){
    var sellQty = prompt("How many shares of " + stock + " would you like to sell?", "0");
    var sellQtyInt = parseInt(sellQty);
    var totalTransaction;
    if (stockMarketQty[stock] == 0||stockMarketQty[stock] < sellQtyInt){
        alert("You don't have that much " + stock + " to sell.");
    }else if (sellQtyInt > 0){
        stockMarketQty[stock] = stockMarketQty[stock] - sellQtyInt;
        document.getElementById(stock + "QTY").innerHTML = stockMarketQty[stock];
        totalTransaction = (sellQtyInt * stockMarketPrice[stock]);
        money = money + totalTransaction;
        document.getElementById("money").innerHTML = "$ " + money;
        alert("Sold " + sellQtyInt +" share of " + stock + " at $" + stockMarketPrice[stock] +" each.\n\nFor a total of $" + totalTransaction)
        alert("You currently have $" + money);
    }else if (sellQtyInt < 0){
        alert("It doesn't work like that...");
    }else{
        alert("Quit wasting my time.");
    }
}
