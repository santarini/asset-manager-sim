var cash = 10000;
var stockMarketPrice = {GOOG: 0, MSFT: 0, AMZN: 0, BOBA: 0};
var stockMarketQty = {GOOG: 0, MSFT: 0, AMZN: 0, BOBA: 0};
var portfolioQty = {GOOG: 0, MSFT: 0, AMZN: 0, BOBA: 0};
var portfolioCost = {GOOG: 0, MSFT: 0, AMZN: 0, BOBA: 0};

//creates a random int
function getRndInteger(min, max) {
    "use strict";
    return Math.floor(Math.random() * (max - min)) + min;
}

//randomize market prices
function marketChange() {
    "use strict";
    stockMarketPrice.GOOG = getRndInteger(200, 700);
    stockMarketPrice.MSFT = getRndInteger(50, 300);
    stockMarketPrice.AMZN = getRndInteger(300, 1500);
    stockMarketPrice.BOBA = getRndInteger(1, 100);
    document.getElementById("GOOGPrice").innerHTML = stockMarketPrice.GOOG;
    document.getElementById("MSFTPrice").innerHTML = stockMarketPrice.MSFT;
    document.getElementById("AMZNPrice").innerHTML = stockMarketPrice.AMZN;
    document.getElementById("BOBAPrice").innerHTML = stockMarketPrice.BOBA;
    updateSecurityValue();
}

function purchase(stock) {
    "use strict";
    var purchaseQty = prompt("How many shares of " + stock + " would you like to buy?", "0");
    var purchaseQtyInt = parseInt(purchaseQty);
    var totalTransaction;
    if (cash === 0 || cash < purchaseQtyInt * stockMarketPrice[stock]) {
        alert("You don't have that enough cash for that transaction.");
    } else if (purchaseQtyInt > 0){
        stockMarketQty[stock] = stockMarketQty[stock] + purchaseQtyInt;
        document.getElementById(stock + "QTY").innerHTML = stockMarketQty[stock];
        totalTransaction = (purchaseQtyInt * stockMarketPrice[stock]);
        cash = cash - totalTransaction;
        document.getElementById("cash").innerHTML = "$ " + cash;
        alert("Purchased " + purchaseQtyInt +" share of " + stock + " at $" + stockMarketPrice[stock] +" each.\n\nFor a total of $" + totalTransaction)
        alert("You currently have $" + cash);
        updateTotalAssetValue();
    } else if (purchaseQtyInt < 0){
        alert("It doesn't work like that...");
    } else{
        alert("Quit wasting my time.");
    }
}

function sell(stock) {
    var sellQty = prompt("How many shares of " + stock + " would you like to sell?", "0");
    var sellQtyInt = parseInt(sellQty);
    var totalTransaction;
    if (stockMarketQty[stock] === 0 || stockMarketQty[stock] < sellQtyInt){
        alert("You don't have that much " + stock + " to sell.");
    } else if (sellQtyInt > 0){
        stockMarketQty[stock] = stockMarketQty[stock] - sellQtyInt;
        document.getElementById(stock + "QTY").innerHTML = stockMarketQty[stock];
        totalTransaction = (sellQtyInt * stockMarketPrice[stock]);
        cash = cash + totalTransaction;
        document.getElementById("cash").innerHTML = "$ " + cash;
        alert("Sold " + sellQtyInt +" share of " + stock + " at $" + stockMarketPrice[stock] +" each.\n\nFor a total of $" + totalTransaction)
        alert("You currently have $" + cash);
        updateTotalAssetValue();
    } else if (sellQtyInt < 0){
        alert("It doesn't work like that...");
    } else{
        alert("Quit wasting my time.");
    }
}

function updatePortfolioCost(){
    portfolioQty.GOOG = stockMarketPrice.GOOG * stockMarketQty.GOOG;
    portfolioQty.MSFT = stockMarketPrice.MSFT * stockMarketQty.MSFT;
    portfolioQty.AMZN = stockMarketPrice.AMZN * stockMarketQty.AMZN;
    portfolioQty.BOBA = stockMarketPrice.BOBA * stockMarketQty.BOBA;
    document.getElementById("GOOGCost").innerHTML = portfolioQty.GOOG;
    document.getElementById("MSFTCost").innerHTML = portfolioQty.MSFT;
    document.getElementById("AMZNCost").innerHTML = portfolioQty.AMZN;
    document.getElementById("BOBACost").innerHTML = portfolioQty.BOBA;
}

function updateSecurityValue() {
    portfolioQty.GOOG = stockMarketPrice.GOOG * stockMarketQty.GOOG;
    portfolioQty.MSFT = stockMarketPrice.MSFT * stockMarketQty.MSFT;
    portfolioQty.AMZN = stockMarketPrice.AMZN * stockMarketQty.AMZN;
    portfolioQty.BOBA = stockMarketPrice.BOBA * stockMarketQty.BOBA;
    document.getElementById("GOOGValue").innerHTML = portfolioQty.GOOG;
    document.getElementById("MSFTValue").innerHTML = portfolioQty.MSFT;
    document.getElementById("AMZNValue").innerHTML = portfolioQty.AMZN;
    document.getElementById("BOBAValue").innerHTML = portfolioQty.BOBA;
    document.getElementById("GOOGChng").innerHTML = portfolioQty.GOOG;
    document.getElementById("MSFTChng").innerHTML = portfolioQty.MSFT;
    document.getElementById("AMZNChng").innerHTML = portfolioQty.AMZN;
    document.getElementById("BOBAChng").innerHTML = portfolioQty.BOBA;
}

function updatePortfolioValue(){
    updatePortfolioCost();
    const sumValues = obj => Object.values(obj).reduce((a, b) => a + b);
    var portfolioSum = sumValues(portfolioQty);
    document.getElementById("portfolio").innerHTML = "$" + portfolioSum;
}
function updateTotalAssetValue(){
    updatePortfolioValue();
    var assetValue = portfolioSum + cash;
    document.getElementById("totalAssetValue").innerHTML = "$" + assetValue;
}

