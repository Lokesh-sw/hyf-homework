let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const num = numbers.filter((x) => x % 2 !== 0).map((x) => x * 2);

console.log("The doubled numbers are", num);
