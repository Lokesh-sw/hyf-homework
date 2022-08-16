/*Create an array with 3 items. All items should be functions. 
Iterate through the array and call all the functions*/

const array = [];

const firstFunction = () => "this is first function";
const secondFunction = () => "this is second function";
const thirdFunction = () => "this is third function";

function pushToArray(element) {
  array.push(element);
}

pushToArray(firstFunction);
pushToArray(secondFunction);
pushToArray(thirdFunction);

array.forEach((call) => {
  console.log(call());
});

//Create a function as a const and try creating a function normally. Call both functions

const variableFunction = () => console.log("This is function with variable");

function normalFunction() {
  console.log("This is normal Function");
}

variableFunction();
normalFunction();

//Create an object that has a key whose value is a function. Try calling this function.

const objectFunction = {
  key: () => console.log("This is an object function"),
};

objectFunction.key();
