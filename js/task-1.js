"use strict";

let quantity = prompt("Quantity of drons?");
let pricePerDroid = prompt("Price for 1 dron?");
makeTransaction(quantity, pricePerDroid);

function makeTransaction(quantity, pricePerDroid) {
    return console.log(`You ordered ${quantity} droids worth ${quantity * pricePerDroid} credits!`) 
};