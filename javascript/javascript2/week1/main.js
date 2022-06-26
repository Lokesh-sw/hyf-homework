console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

const product = document.querySelector("#product");
function renderProducts(products) {
  for (let i = 0; i < products.length; i++) {
    const list = document.createElement("li");
    const title = document.createElement("h4");
    const price = document.createElement("p");
    const rating = document.createElement("p");

    title.innerHTML = products[i].name;
    price.innerHTML = `Price: ${products[i].price}`;
    rating.innerHTML = `Rating: ${products[i].rating}`;
    product.appendChild(list);
    product.appendChild(title);
    product.appendChild(price);
    product.appendChild(rating);
  }
}

renderProducts(products);

// Shortest word
const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
function getShortestWord(danish) {
  return (
    "Shortest word = " + danish.reduce((x, y) => (x.length <= y.length ? x : y))
  );
}
console.log(getShortestWord(danishWords));

//Find and count danish letter

function getDanishLetter(letters) {
  const stringsearchæ = letters.split("æ").length - 1;
  const stringsearchø = letters.split("ø").length - 1;
  const stringsearchå = letters.split("å").length - 1;
  const totalletters = stringsearchå + stringsearchæ + stringsearchø;
  console.log({
    total: totalletters,
    å: stringsearchå,
    æ: stringsearchæ,
    ø: stringsearchø,
  });
}

const danishString = "Jeg har en blå bil";

const danishString2 = "Blå grød med røde bær";

getDanishLetter(danishString); // output {total: 1, å: 1, æ: 0, ø: 0}
getDanishLetter(danishString2); // output {total: 4, å: 1, æ: 1, ø: 2}

// Spirit animal name generator

const animals = [
  "Tiger",
  "Parrot",
  "Lion",
  "Duck",
  "Swan",
  "Peacock",
  "Catfish",
  "Cat",
  "Spider",
  "Bear",
];

const input = document.querySelector("#Input");
const alert = document.querySelector("#message");
const button = document.querySelector("#btn");

document.body.appendChild(input);
document.body.appendChild(button);
document.body.appendChild(alert);

function getAnimalName() {
  const name = animals[Math.floor(Math.random() * 10)];
  if (input.value === "" || input.value === null) {
    message.innerHTML = "Please enter a name";
  } else {
    message.innerHTML = `Name: ${input.value}: Your spirited animal is - ${name} `;
  }
}

button.addEventListener("click", getAnimalName);
