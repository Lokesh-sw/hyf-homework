const boughtCandyPrices = [];
let candyPrice = 0;

function addCandy(candyType, weight) {
  if ((candyType = "sweet")) {
    candyPrice = weight * 0.5;
    return boughtCandyPrices.push(candyPrice);
  } else if ((candyType = "chocolate")) {
    candyPrice = weight * 0.7;
    return boughtCandyPrices.push(candyPrice);
  } else if ((candyType = "toffee")) {
    candyPrice = weight * 1.1;
    return boughtCandyPrices.push(candyPrice);
  } else if ((candyType = "chewing-gum")) {
    candyPrice = weight * 0.03;
    return boughtCandyPrices.push(candyPrice);
  }
}

addCandy("sweet", 20);
addCandy("chocolate", 50);
addCandy("toffee", 15);
addCandy("chewing-gum", 30);
console.log(boughtCandyPrices);

const amountToSpend = Math.random() * 100;

let total = 0;

function canBuyMoreCandy(total) {
  for (let index = 0; index < boughtCandyPrices.length; index++) {
    total += boughtCandyPrices[index];
  }
  if (total < amountToSpend) {
    console.log("You can buy more, so please do!");
  } else if (total > amountToSpend) {
    console.log("Enough candy for you!");
  }
}
canBuyMoreCandy(total);
