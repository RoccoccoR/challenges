console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  // Exercise: Append a new entry to the toast messages container

  const newToast = document.createElement("li");
  newToast.classList.add("toast-container__message");

  const NewToastMessage = document.createTextNode("Helloooo!");

  newToast.append(NewToastMessage);
  toastContainer.append(newToast);
});

clearButton.addEventListener("click", () => {
  // Exercise: Clear the stack of toast messages
  toastContainer.innerHTML = "";
});
