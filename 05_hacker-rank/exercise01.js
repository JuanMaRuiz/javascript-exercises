"use strict";

module.exports.maxiumumToys = function(prices, k) {
    // Complete this function
    let amount = k,
        toysToBuy = [],
        i,
        max;

    for (i = 0, max = prices.length; i < max; i += 1) {
        if ( prices[i] < amount ) {
            amount = amount - prices[i];
            toysToBuy.push(prices[i]);
            prices.slice(prices.indexOf(prices[i]), 1);
            console.log("prices[i]:", prices[i]);
        }
    }

    return toysToBuy.length;
};

// function removeBoughtItem(price, index) {
//     if(price < amount) {
//         amount = amount - price;
//         toysToBuy.push(price);
//     }
// }
