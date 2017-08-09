"use strict";

module.exports.maxiumumToys = function(prices, k) {
    // Complete this function
    let amount = k;
    let toysToBuy = 0;

    prices.forEach((price) => {
        console.log("price: ", price);
        console.log("amount: ", amount);
        if(price < amount) {
            amount = amount - price;
            ++toysToBuy;
        }
    })
    return toysToBuy;
}
