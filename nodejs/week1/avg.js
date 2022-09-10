const arg = process.argv.slice(2);
let number = 0;
for (let i = 0; i < arg.length; i++) {
  number += Number(arg[i]);
}
const average = number / arg.length;

console.log(`average for these numbers is ${average}`);
