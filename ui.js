import Task from "./task.js";
import TaskList from "./taskList.js";
import Storage from "./storage.js";

class Ui {
  assignInput() {
    const ui = new Ui();
    let automaticId = (function () {
      if (localStorage.getItem("tasks") === null) {
        let automaticId = 1;
        return automaticId;
      } else {
        let automaticId;
        return (automaticId =
          JSON.parse(localStorage.getItem("tasks")).length + 1);
      }
    })();

    let inputName = document.querySelector("#task");
    let inputAssignee = document.querySelector("#assignee");
    let inputStatus = document.querySelectorAll(".checkOption");
    let creationDate = new Date();
    let checkedValue = "";

    for (let i = 0; inputStatus[i]; ++i) {
      if (inputStatus[i].checked) {
        checkedValue = inputStatus[i].value;
        break;
      }
      if (checkedValue == "") {
        alert("You must select a status");
        return false;
      }
    }

    if (inputName.value === "") {
      alert("You must insert a task name");
      return false;
    } else if (inputAssignee.value == "Choose one") {
      alert("You must choose a designee");
      return false;
    } else if (inputName.value.length > 100) {
      alert("You must not exceed 100 characters");
    }

    inputName = inputName.value;
    inputAssignee = inputAssignee.value;
    inputStatus = checkedValue;

    ui.updateId();
    let task = new Task(
      automaticId,
      inputName,
      inputAssignee,
      inputStatus,
      creationDate
    );
  }

  addTask(automaticId, inputName, inputAssignee, inputStatus, creationDate) {
    let table = document.querySelector(".myTable");
    let newRow = table.insertRow(1);
    newRow.classList.add("tableRows");

    let td1 = newRow.insertCell(0);
    let td2 = newRow.insertCell(1);
    let td3 = newRow.insertCell(2);
    let td4 = newRow.insertCell(3);
    let td5 = newRow.insertCell(4);
    let td6 = newRow.insertCell(5);
    let td7 = newRow.insertCell(6);

    td1.innerHTML = automaticId;
    td1.classList = "tdItem";
    td5.innerHTML = creationDate;
    td5.classList = "tdItem";

    let inputBoxName = document.createElement("input");
    inputBoxName.type = "text";
    inputBoxName.disabled = true;
    inputBoxName.value = inputName;
    inputBoxName.classList = "inputBoxTasks";
    td2.classList = "tdItem";
    td2.appendChild(inputBoxName);

    let inputBoxAssignee = document.createElement("input");
    inputBoxAssignee.type = "text";
    inputBoxAssignee.disabled = true;
    inputBoxAssignee.value = inputAssignee;
    inputBoxAssignee.classList = "inputBoxTasks ";
    td3.classList = "tdItem";

    td3.appendChild(inputBoxAssignee);

    let inputBoxStatus = document.createElement("input");
    inputBoxStatus.type = "text";
    inputBoxStatus.disabled = true;
    inputBoxStatus.value = inputStatus;
    inputBoxStatus.classList = "inputBoxTasks";
    td4.classList = "tdItem";
    td4.appendChild(inputBoxStatus);

    let deleteIcon = document.createElement("a");
    deleteIcon.setAttribute("href", "#");
    deleteIcon.classList = "deleteIconClass fa fa-trash";
    td6.classList = "tdItem";
    td6.appendChild(deleteIcon);

    let editIcon = document.createElement("a");
    editIcon.setAttribute("href", "#");
    editIcon.classList = "editIcon fa fa-edit";
    td7.classList = "tdItem";
    td7.appendChild(editIcon);

    const taskList = new TaskList();
    deleteIcon.addEventListener("click", taskList.deleteTask);

    let name = (function () {
      return inputBoxName;
    })();
    let assignee = (function () {
      return inputBoxAssignee;
    })();
    let status = (function () {
      return inputBoxStatus;
    })();

    editIcon.addEventListener("click", function () {
      taskList.editTask(inputBoxName, inputBoxAssignee, inputBoxStatus);
    });
    const saveToLS = new Storage();
    saveToLS.saveToLocalStorage(
      automaticId,
      inputName,
      inputAssignee,
      inputStatus,
      creationDate
    );
  }
  oneBox(inputStatus) {
    if (inputStatus[0].checked) {
      inputStatus[1].checked == false;
      inputStatus[0].checked == true;
    }
  }

  updateId() {
    let id = (document.querySelector("#id").value = (function () {
      if (localStorage.getItem("tasks") === null) {
        let automaticId = 2;
        return automaticId;
      } else {
        let automaticId;
        return (automaticId =
          JSON.parse(localStorage.getItem("tasks")).length + 2);
      }
    })());
  }
}

export default Ui;
