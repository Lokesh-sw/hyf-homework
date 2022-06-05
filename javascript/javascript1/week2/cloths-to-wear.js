// cloths to wear function

function getClothIdeas(temp) {
  if (temp <= 0) {
    return "Its very cold: Wear warm winter jackets, boots and woolen cloths";
  } else if (temp <= 10) {
    return "Its still cold so wear full sleeve jackets and trousers";
  } else if (temp <= 15) {
    return "Weather is good: Wear Shirt/tshirt and but carry a summer jacket ";
  } else if (temp <= 25) {
    return "weather is awesome: wear tshirt and shorts with flipflops";
  } else {
    return "its very warm: if you go out carry a fan with you!";
  }
}

const clothsToWear = getClothIdeas(18);
console.log(clothsToWear);
