function Task(taskName, deadline, priority, details){
  this.taskName = taskName;
  this.deadline = deadline;
  this.priority = priority;
  this.details = details;

}

Task.prototype.allDetail = function() {
  return "Deadline: " + this.deadline + "<br>Priority: " + this.priority + "<br>Details: " + this.details;
}

$(document).ready(function () {
  var taskArray = [];

  $("#input-form").submit(function(event){
    event.preventDefault();

    var taskName = $("#task-name-input").val();
    var deadline = $("#deadline-input").val();
    var priority = $("#priority-input").val();
    var details = $("#details-input").val();

    var myTask = new Task (taskName, deadline, priority, details);

    taskArray.push(myTask);
    $("#task-table > tbody").empty();

    
    taskArray.forEach(function(task){
      $("#task-table").append("<tr><td><span class='glyphicon glyphicon-flash " + task.priority + "'></span></td><td><span class='listedTask'>" + task.taskName + "</span></td><td><span class='markComplete'>Mark Complete</span></td></tr>")
    })

    $(".listedTask").last().click(function() {
      $(".detail-display").show();
      $(".task-name").text(myTask.taskName);
      $(".details").html(myTask.allDetail());
    });

    $(".markComplete").last().click(function(){

    })
  });
});
