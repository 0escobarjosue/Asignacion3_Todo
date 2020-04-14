import Ui from "./Ui.js";

class Task {
  constructor(
    automaticId,
    inputName,
    inputAssignee,
    inputStatus,
    creationDate
  ) {
    this.automaticId = automaticId;
    this.inputName = inputName;
    this.inputAssignee = inputAssignee;
    this.inputStatus = inputStatus;
    this.creationDate = creationDate;

    const ui = new Ui();
    ui.addTask(
      automaticId,
      inputName,
      inputAssignee,
      inputStatus,
      creationDate
    );
  }
}

export default Task;
