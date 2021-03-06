function Task(taskName, deadline, priority, details){
  this.taskName = taskName;
  this.deadline = deadline;
  this.priority = priority;
  this.details = details;
}

Task.prototype.allDetail = function() {
  var deadlineReformat = moment(this.deadline).fromNow();
  var priorityText;
  if(this.priority === 3){
    priorityText = "High";
  } else if (this.priority === 2){
    priorityText = "Medium";
  } else {
    priorityText = "Low";
  }
  return "Deadline: " + deadlineReformat + "<br>Priority: " + priorityText + "<br>Details: " + this.details;
}

$(document).ready(function () {
  var taskArray = [];
  var completedTasks =[];

  $("#input-form").submit(function(event){
    event.preventDefault();

    var taskName = $("#task-name-input").val();
    var deadline = $("#deadline-input").val();
    var priority = parseInt($("#priority-input").val());
    var details = $("#details-input").val();

    var myTask = new Task (taskName, deadline, priority, details);

    taskArray.push(myTask);


    taskArray.sort(function(a,b){
      return b.priority - a.priority;

    });
    displayTaskArray();


  });

  function displayTaskArray(){
    $("#task-table > tbody").empty();
    taskArray.forEach(function(task, index){
      makeTaskRow(task);
      $(".listedTask").last().click(function() {
        $(".detail-display").show();
        $(".task-name").text(task.taskName);
        $(".details").html(task.allDetail());
      });

      $(".markComplete").last().click(function(){
        completedTasks.push(task);
        taskArray.splice(index,1);
        displayTaskArray();
        displayCompletedArray();


      });
    });
  }

  function displayCompletedArray(){
    if(completedTasks.length > 0){
      $(".completed-tasks").show();
    } else {
      $(".completed-tasks").hide();
    }
    $("#completed-task-table > tbody").empty();
    completedTasks.forEach(function(task, index){
      moveCompletedTask(task);
      $(".remove").last().click(function(){
        completedTasks.splice(index,1);
        displayCompletedArray();
      });
    });
  }

  function makeTaskRow(task) {
    $("#task-table > tbody").append("<tr><td><span class='glyphicon glyphicon-flash priority" + task.priority + "'></span></td><td><span class='listedTask'>" + task.taskName + "</span></td><td><button class='markComplete'>Mark Complete</button></td></tr>");
  }
  function moveCompletedTask(task) {
    $("#completed-task-table > tbody").append("<tr><td><span class='glyphicon glyphicon-flash priority" + task.priority + "'></span></td><td><span class='listedTask'>" + task.taskName + "</span></td><td><button class='remove'>Remove</button></td></tr>");
  }


});
