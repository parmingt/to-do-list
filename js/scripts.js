function Task(taskName, deadline, priority, details){
  this.taskName = taskName;
  this.deadline = deadline;
  this.priority = priority;
  this.details = details;
}

$(document).ready(function () {
  $("#input-form").submit(function(event){
    event.preventDefault();

    var taskName = $("#task-name-input").val();
    var deadline = $("#deadline-input").val();
    var priority = $("#priority-input").val();
    var details = $("#details-input").val();

    var myTask = new Task (taskName, deadline, priority, details);
    

  })
})
