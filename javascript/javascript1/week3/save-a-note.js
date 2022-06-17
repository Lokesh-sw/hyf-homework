const note = [];

// fuction to push notes in array

function saveNote(content, id) {
  if (typeof content !== "string" && typeof id !== Number) {
    return "Please enter a valid note type";
  } else {
    note.push({ content, id });
  }
}

// adding notes to array

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
saveNote("Call Lucia", 3);

console.log(note);

// function to find obeject with id number

function getNote(id) {
  if (typeof id !== "number" || typeof id === "null" || id > note.length) {
    return "Error:This is not a valid id";
  } else {
    for (let i = 0; i < note.length; i++) {
      if (id === note[i].id) {
        return note[i];
      }
    }
  }
}

const firstNote = getNote(3);
console.log(firstNote);

// function to log all notes with some stings

function logOutNotesFormatted() {
  for (let i = 0; i < note.length; i++) {
    console.log(
      `The note with id ${note[i].id} has the following note text: ${note[i].content}`
    );
  }
}
logOutNotesFormatted();

// extra function to delete note

function eraseNote(id) {
  if (typeof id !== "number" || typeof id === "null" || id > note.length) {
    return "Error:This is not a valid id";
  } else {
    for (let i = 0; i < note.length; i++) {
      if (id === note[i].id) {
        note.splice(id - 1, 1);
        console.log(note);
      }
    }
  }
}
eraseNote(1);
