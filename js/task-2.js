"use strict";

// const country = prompt("Country?");
// const price = prompt("Price?");
// const deliveryFee = prompt("Delivery fee?");
// getShippingMessage(country, price, deliveryFee);

function getShippingMessage(country, price, deliveryFee) {
  return `Shipping to ${country} will cost ${
    Number.parseFloat(price) + Number.parseFloat(deliveryFee)
  } credits`;
}

console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"
