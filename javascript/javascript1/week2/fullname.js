//Flight booking full name function

function getFullname(
  firstname = "Enter first name",
  surname = "Enter last name",
  useFormalName
) {
  if (useFormalName === true) {
    return `Lord ${firstname} ${surname}`;
  } else if (firstname === "" || surname === "") {
    return "Please enter your name";
  } else {
    return `${firstname} ${surname}`;
  }
}

console.log(getFullname("Benjamin", "hughes"));

// declaring 2 variables

const fullName1 = "Benjamin";
const fullName2 = "hughes";

console.log(getFullname(fullName1, fullName2));

// with and without lord prefix

console.log(getFullname("Benjamin", "Hughes", true));
console.log(getFullname("Benjamin", "Hughes", false));

// calling function without argument or empty string

console.log(getFullname(""));
console.log(getFullname());

/* in  case of a women maybe create one more parameter to getFullname which 
confirms gender in form input and based of man or woman
can give another condition  to select lady or Madam as value */
