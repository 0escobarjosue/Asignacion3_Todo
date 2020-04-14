import Storage from "./storage.js";
class TaskList {
  listTasks() {
    const storage = new Storage();
  }

  createTask() {}

  deleteTask(e) {
    if (e.target.classList.contains("deleteIconClass")) {
      if (confirm("The item clicked will be deleted"));
      e.target.parentElement.parentElement.remove();
    }

    const storage = new Storage();
    storage.deletefromLocalStorage(
      e.target.parentElement.parentElement.firstChild.innerHTML
    );
  }

  editTask(inputName, inputAssignee, inputStatus, e) {
    if (
      inputName.disabled &&
      inputAssignee.disabled &&
      inputStatus.disabled == true
    ) {
      inputName.disabled = !inputName.disabled;
      inputAssignee.disabled = !inputAssignee.disabled;
      inputStatus.disabled = !inputStatus.disabled;
    } else {
      inputName.disabled = !inputName.disabled;
      inputAssignee.disabled = !inputAssignee.disabled;
      inputStatus.disabled = !inputStatus.disabled;

      let indexof = tasks.indexOf(
        e.target.parentElement.parentElement.firstChild.innerHTML
      );
      tasks[indexof] = input.value;
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    e.preventDefault();
  }
}
export default TaskList;
