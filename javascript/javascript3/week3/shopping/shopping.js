class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getCurrency(currency) {
    switch (currency) {
      case "GBP":
        return "£" + this.price * 0.11;

      case "USD":
        return this.price * 0.15 + "USD";

      case "INR":
        return this.price * 11.24 + " INR ";

      case "euros":
        return this.price * 0.13 + " EUR";

      default:
        return this.price + " DKK";
    }
  }
}

class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    // Implement functionality here
    this.products.push(product);
  }

  removeProduct(product) {
    // Implement functionality here
    for (let i = 0; i < this.products.length; i++) {
      if (product === this.products[i]) {
        this.products.splice(i, 1);
      }
    }
  }

  searchProduct(productName) {
    // Implement functionality here
    let sProduct = [];
    this.products.forEach((product) => {
      if (product.name.toLowerCase() === productName.toLowerCase()) {
        sProduct = product;
      }
    });
    return sProduct;
  }

  getTotal() {
    // Implement functionality here
    const totalPrice = this.products.reduce((sum, product) => {
      return (sum += product.price);
    }, 0);
    return totalPrice;
  }

  renderProducts() {
    // Implement functionality here
    const productsList = document.getElementById("productsList");
    this.products.forEach((product) => {
      const productItems = document.createElement("li");
      productItems.innerHTML = `<h2>${product.name}</h2> <span>${product.price}</span>`;
      productsList.appendChild(productItems);
    });
  }

  getUser(user) {
    // Implement functionality here
    return new Promise((resolve, reject) => {
      fetch(`https://jsonplaceholder.typicode.com/users/${user}`)
        .then((response) => response.json())
        .then((data) => resolve(data));
    });
  }
  showcart() {
    console.log(this.products);
  }
}

const shoppingCart = new ShoppingCart();
const screen = new Product("Tele", 2000);
const washingMachine = new Product("Washing machine", 5000);
const Blender = new Product("Blender", 500);
const iphone = new Product("iphone", 10000);
const macbook = new Product("macbook", 13000);
// addProduct
shoppingCart.addProduct(screen);
shoppingCart.addProduct(washingMachine);
shoppingCart.addProduct(Blender);
shoppingCart.addProduct(iphone);
shoppingCart.addProduct(macbook);
shoppingCart.showcart();
// removeProduct
shoppingCart.removeProduct(washingMachine);
shoppingCart.showcart();
// getTotal
console.log("Total price = " + shoppingCart.getTotal() + " dkk");
// searchProduct
console.log(shoppingCart.searchProduct("coffeeMachine"));
// renderProducts
shoppingCart.renderProducts();
//getUser
shoppingCart.getUser(2).then((result) => console.log(result));
const plant = new Product("plant", 50);
console.log(plant.getCurrency("USD"));
console.log(plant.getCurrency("GBP"));
console.log(plant.getCurrency("euros"));
console.log(plant.getCurrency("INR"));

// part 2

shoppingCart.getUser(2).then((result) => {
  console.log(result);

  shoppingCart.renderProducts();
  document.getElementById("total").innerText = `Total Price =
    ${shoppingCart.getTotal()} dkk`;
});
