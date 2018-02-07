var stocks = {
MSFT : {ticker: 'MSFT', price: 100, priceChng: 0, prcntChng: 0, lastPrice0: 95, lastPrice1: 90, lastPrice2: 85, lastPrice3: 80, lastPrice4: 75, lastPrice5: 70},
GOOG : {ticker: 'GOOG', price: 1001, priceChng: 0, prcntChng: 0, lastPrice0: 951, lastPrice1: 901, lastPrice2: 851, lastPrice3: 801, lastPrice4: 751, lastPrice5: 701},
AMZN : {ticker: 'AMZN', price: 1001, priceChng: 0, prcntChng: 0, lastPrice0: 951, lastPrice1: 901, lastPrice2: 851, lastPrice3: 801, lastPrice4: 751, lastPrice5: 701},
BOBA : {ticker: 'BOBA', price: 1001, priceChng: 0, prcntChng: 0, lastPrice0: 951, lastPrice1: 901, lastPrice2: 851, lastPrice3: 801, lastPrice4: 751, lastPrice5: 701}
}
    
//all stocks
var stockMarket = [];

//populate all stock array
for(var key in stocks) {
    stockMarket.push(stocks[key]);
}
