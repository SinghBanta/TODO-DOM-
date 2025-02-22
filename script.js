let ctr = 1; //intialize index
function deleteTodo(index) {
  const element = document.getElementById(index);
  element.parentNode.removeChild(element);
}

function addTodo() {
  const inputEl = document.querySelector("input"); // Selects the input field
  const value = inputEl.value; // Gets the value entered in the input field

  const newDiv = document.createElement("div"); // Creates a new <div> element
  newDiv.setAttribute("id", ctr); // Sets the ID of the new div to the current counter value

  newDiv.innerHTML =
    "<div>" +
    value +
    '</div><button onclick="deleteTodo(' +
    ctr +
    ')">Delete</button>';
  // Sets the inner HTML of the new div:
  // - A div containing the TODO text
  // - A Delete button that calls `deleteTodo(ctr)` when clicked

  document.querySelector("body").appendChild(newDiv); // Appends the new div to the body

  ctr = ctr + 1; // Increments the counter for the next TODO item
}
