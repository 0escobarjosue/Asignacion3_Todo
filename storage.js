import TaskList from "./taskList.js";

class Storage {
  saveToLocalStorage(id, name, assignee, status, date) {
    let tasks;

    if (localStorage.getItem("tasks") === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    tasks.push({ id, name, assignee, status, date });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  getFromLocalStorage() {
    let tasks;
    if (localStorage.getItem("tasks") === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem("tasks"));
    }

    tasks.forEach(function (task) {
      var table = document.querySelector(".myTable");
      var newRow = table.insertRow(1);
      newRow.classList.add("tableRows");

      var td1 = newRow.insertCell(0);
      var td2 = newRow.insertCell(1);
      var td3 = newRow.insertCell(2);
      var td4 = newRow.insertCell(3);
      var td5 = newRow.insertCell(4);
      var td6 = newRow.insertCell(5);
      var td7 = newRow.insertCell(6);

      td1.innerHTML = task.id;
      td1.classList = "tdItem";
      td5.innerHTML = task.date;
      td5.classList = "tdItem";

      let inputBoxName = document.createElement("input");
      inputBoxName.type = "text";
      inputBoxName.disabled = true;
      inputBoxName.value = task.name;
      inputBoxName.classList = "inputBoxTasks";
      td2.classList = "tdItem";
      td2.appendChild(inputBoxName);

      let inputBoxAssignee = document.createElement("input");
      inputBoxAssignee.type = "text";
      inputBoxAssignee.disabled = true;
      inputBoxAssignee.value = task.assignee;
      inputBoxAssignee.classList = "inputBoxTasks";
      td3.classList = "tdItem";
      td3.appendChild(inputBoxAssignee);

      let inputBoxStatus = document.createElement("input");
      inputBoxStatus.type = "text";
      inputBoxStatus.disabled = true;
      inputBoxStatus.value = task.status;
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
      editIcon.classList = "editIcon fa fa-edit ";
      td7.classList = "tdItem";
      td7.appendChild(editIcon);

      const taskList = new TaskList();

      deleteIcon.addEventListener("click", taskList.deleteTask);
      editIcon.addEventListener("click", () => {
        taskList.editTask(inputBoxName, inputBoxAssignee, inputBoxStatus);
      });
    });
  }

  deletefromLocalStorage(deleteId) {
    let tasks = JSON.parse(localStorage.getItem("tasks"));

    tasks.forEach(function (task, index) {
      if (task.id == deleteId) {
        tasks.splice(index, 1);
      }
    });

    localStorage.clear();
    localStorage.setItem("tasks", JSON.stringify(tasks));

    let popUp = (document.querySelector("#popUp").innerHTML =
      "Succesfully deleted!");
  }
}

export default Storage;
