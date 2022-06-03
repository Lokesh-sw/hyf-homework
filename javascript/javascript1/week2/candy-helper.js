const boughtCandyPrices = [];

function addCandy(candyType, weight) {
  let candyPrice = 0;
  if (candyType === "sweet") {
    candyPrice = weight * 0.5;
  } else if (candyType === "chocolate") {
    candyPrice = weight * 0.7;
  } else if (candyType === "toffee") {
    candyPrice = weight * 1.1;
  } else if (candyType === "chewing-gum") {
    candyPrice = weight * 0.03;
  }
  boughtCandyPrices.push(candyPrice);
}

// now add some candy prices to array

addCandy("sweet", 20);
addCandy("chocolate", 50);
addCandy("toffee", 15);
addCandy("chewing-gum", 30);

// makes sum of all prices added to array

let sumArray = 0;
for (let index = 0; index < boughtCandyPrices.length; index++) {
  sumArray += boughtCandyPrices[index];
}

// see if the function adds up the prices by logging it

console.log(sumArray);

// works fine so move on to next part of assignment.

const amountToSpend = Math.random() * 100;

let total = 0;

function canBuyMoreCandy(total) {
  for (let index = 0; index < boughtCandyPrices.length; index++) {
    total += boughtCandyPrices[index];
  }
  if (total < amountToSpend) {
    console.log("You can buy more, so please do!");
  } else {
    console.log("Enough candy for you!");
  }
}
canBuyMoreCandy(total);
