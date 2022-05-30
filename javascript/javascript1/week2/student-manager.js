const class07Students = [];
function addStudentToClass(studentName) {
  if (!studentName) {
    alert('"please enter a Name"');
  } else if (class07Students.includes(studentName)) {
    alert(`Student "${studentName}" is already in the class`);
  } else if (studentName === "Dronning" || class07Students.length < 6) {
    return class07Students.push(studentName);
  } else if (class07Students.length >= 6) {
    alert('"Cannot add more students to class 07"');
  } else {
    return class07Students.push(studentName);
  }
}

// calling function with different conditions

addStudentToClass();
addStudentToClass("Lokesh");
addStudentToClass("Lucia");
addStudentToClass("kavin");
addStudentToClass("Marius");
addStudentToClass("Kim");
addStudentToClass("Lucia");
addStudentToClass("Dronning");

// function for getting number of student

function getNumberOfStudents(number) {
  return `There are ${class07Students.length} in the class`;
}
