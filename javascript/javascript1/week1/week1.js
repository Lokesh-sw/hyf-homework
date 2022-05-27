// Age-IFy excericse

const yearOfBirth = 1987;
const yearFuture = 2027;
const age = yearFuture - yearOfBirth;

console.log(`You will be ${age} years old in ${yearFuture}.`);

// Goodboy-oldboy excercise

const dogYearOfBirth = 2017;

const dogYearFuture = 2027;

const dogYear = dogYearFuture - dogYearOfBirth;

let shouldShowResultInDogYears = true;

if (shouldShowResultInDogYears) {
  console.log(
    `your dog will be ${dogYear * 7} dog years old in ${dogYearFuture}`
  );
} else {
  console.log(
    `Your dog will be ${dogYear} human years old in ${dogYearFuture}`
  );
}

//Housey pricey

const volumeInMeters = [8 * 10 * 10, 5 * 11 * 8];
const gardenSizeInM2 = [100, 70];
const houseCost = [2500000, 1000000];

//for peter

const estimatedCostPeter =
  volumeInMeters[0] * 2.5 * 1000 + gardenSizeInM2[0] * 300;
if (estimatedCostPeter < houseCost[0]) {
  console.log(`Peter is paying ${houseCost[0] - estimatedCostPeter} extra`);
} else if (estimatedCostPeter > houseCost[0]) {
  console.log(`Peter saving ${estimatedCostPeter - houseCost[0]}`);
} else {
  console.log("Correct Price");
}

// for julia

const estimatedCostJulia =
  volumeInMeters[1] * 2.5 * 1000 + gardenSizeInM2[1] * 300;
if (estimatedCostJulia < houseCost[1]) {
  console.log(`Julia is paying ${houseCost[1] - estimatedCostJulia} extra`);
} else if (estimatedCostJulia > houseCost[1]) {
  console.log(`Julia saving ${estimatedCostJulia - houseCost[1]}`);
} else {
  console.log("Correct Price");
}

//Ez namey

const firstWords = [
  "Supreme",
  "Tapperiet",
  "Soldana",
  "Marco",
  "Link",
  "Flexidox",
  "Meyer",
  "mostline",
  "Doypack",
  "Tik-tok",
];
const secondWords = [
  "corporation",
  "LTD",
  "Aps",
  "Consultancy",
  "Services",
  "Advisory",
  "Enterprise",
  "Portfolio",
  "Administration",
  "Inc",
];

const randomNumber1 = Math.floor(Math.random() * 10);
const randomNumber2 = Math.floor(Math.random() * 10);
const startupName = `${firstWords[randomNumber1]} ${secondWords[randomNumber2]}`;

console.log(
  `The startup: ${startupName} contains ${startupName.length} characters`
);
