moveElement(document.querySelector("li"), { x: 100, y: 100 }).then(() => {
  console.log("Element has been moved");
});

let redCircle;
let blueCircle;
let greenCircle;

function translateAllAtOnce() {
  const circles = [...document.querySelector(".marks").children];
  Promise.all([
    moveElement(circles[0], {
      x: 20 - parseInt(circles[0].style.left),
      y: 300 - parseInt(circles[0].style.top),
    }),
    moveElement(circles[1], {
      x: 400 - parseInt(circles[1].style.left),
      y: 300 - parseInt(circles[1].style.top),
    }),
    moveElement(circles[2], {
      x: 400 - parseInt(circles[2].style.left),
      y: 20 - parseInt(circles[2].style.top),
    }),
  ])
    .then(() => {
      console.log("All circles are moved");
    })
    .catch((error) => console.error(err));
}
translateAllAtOnce(); // Comment out this function to see effect of next function

async function translateOneByOne() {
  const circles = [...document.querySelector(".marks").children];
  redCircle = await moveElement(circles[0], {
    x: 20 - parseInt(circles[0].style.left),
    y: 300 - parseInt(circles[0].style.top),
  }).then(() => {
    console.log("red circle moved");
  });
  blueCircle = await moveElement(circles[1], {
    x: 400 - parseInt(circles[1].style.left),
    y: 300 - parseInt(circles[1].style.top),
  }).then(() => {
    console.log("blue circle moved");
  });

  greenCircle = await moveElement(circles[2], {
    x: 400 - parseInt(circles[2].style.left),
    y: 20 - parseInt(circles[2].style.top),
  }).then(() => {
    console.log("green circle moved");
  });
}
translateOneByOne();
