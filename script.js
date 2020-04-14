import Ui from "./ui.js";
import Storage from "./storage.js";

let id = (document.querySelector("#id").value = (function () {
  if (localStorage.getItem("tasks") === null) {
    let automaticId = 1;
    return automaticId;
  } else {
    let automaticId;
    return (automaticId = JSON.parse(localStorage.getItem("tasks")).length + 1);
  }
})());

const ui = new Ui();
const btnCreateTask = document
  .querySelector(".btnCreateTask")
  .addEventListener("click", ui.assignInput);

const storage = new Storage();
document.addEventListener("DOMContentLoaded", storage.getFromLocalStorage);
