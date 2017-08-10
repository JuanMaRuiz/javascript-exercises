"use strict";

module.exports.maxiumumToys = function(prices, k) {
    // Complete this function
    let amount = k;
    let toysToBuy = [];

    prices.forEach(removeBoughtItem);

    function removeBoughtItem(price, index) {
        if(price < amount) {
            amount = amount - price;
            toysToBuy.push(price);
        }
    }


    return toysToBuy.length;
};
