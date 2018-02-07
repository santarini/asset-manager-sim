var stocks = {
MSFT : {ticker: 'MSFT', price: {0: 100}, chng: 0}
}

//creates a random int
function getRndInteger(min, max) {
    "use strict";
    return Math.floor(Math.random() * (max - min)) + min;
}

var period = 1;

function marketChange() {
    //create historical prices
    for (i = period; 0 < i; i--){
    stocks.MSFT.price[i] = stocks.MSFT.price[i-1]
    }
     //create random price
    stocks.MSFT.price[0] = getRndInteger(50, 300);
    period +=1;
}
