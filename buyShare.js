function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

var money = 10000;
var stockMarketPrice = {GOOG:0, MSFT:0, AMZN:0, BOBA:0};
var stockMarketQty = {GOOG:0, MSFT:0, AMZN:0, BOBA:0};

//randomize market prices
function marketChange(){
stockMarketPrice["GOOG"] = getRndInteger(30, 50);
stockMarketPrice["MSFT"] = getRndInteger(30, 50);
stockMarketPrice["AMZN"] = getRndInteger(30, 50);
stockMarketPrice["BOBA"] = getRndInteger(30, 50);
}

function viewMarket(){
console.log("The current market prices are:");
console.log("GOOG: ", stockMarketPrice["GOOG"]);
console.log("MSFT: ", stockMarketPrice["MSFT"]);
console.log("AMZN: ", stockMarketPrice["AMZN"]);
console.log("BOBA: ", stockMarketPrice["BOBA"]);
}

marketChange()

//list your current stats
console.log("You currently have $", money);

//list current market prices
console.log("The current market prices are:");
console.log("GOOG: ", stockMarketPrice["GOOG"]);
console.log("MSFT: ", stockMarketPrice["MSFT"]);
console.log("AMZN: ", stockMarketPrice["AMZN"]);
console.log("BOBA: ", stockMarketPrice["BOBA"]);

function purchase(stock){
    
    //dicitonary reference is wrong here, read soemthing about using a map instead, need to reference key not value
    var purchaseQty = prompt("How many shares of " + "XXXX" + " would you like to buy?", "0");
    var purchaseQtyInt = parseInt(purchaseQty);
    
    if (purchaseQtyInt > 0){
        stockMarketQty[stock] = purchaseQTY;
        money = money - (purchaseQTY * stockMarketPrice[stock]);
        console.log("Purchased " + purchaseQTY +" share of XXXXX at $" + stockMarketPrice[stock] +" each.")
        console.log("You currently have $", money);
    }else if (purchaseQtyInt < 0){
        alert("It doesn't work like that...");
    }else{
        alert("Quit wasting my time.");
    }
}

//view your current holdings

function viewPortfolio(){
   //list current market prices
console.log("Your current holdings are:");
console.log("GOOG: ", stockMarketQty["GOOG"]);
console.log("MSFT: ", stockMarketQty["MSFT"]);
console.log("AMZN: ", stockMarketQty["AMZN"]);
console.log("BOBA: ", stockMarketQty["BOBA"]);
}
