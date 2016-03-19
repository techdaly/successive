//Business Logic
alert("This is alert #1")

function Task(count) {
  this.count = count;
}

Task.prototype.yes = function() {
  this.count = this.count + 1;
  return this.count;
}

Task.prototype.pass = function() {
  this.count = this.count + 0;
  return this.count;
}

Task.prototype.no = function() {
  this.count = 0;
  return this.count;
}


//User Interface Logic

$("button#yes").submit(function(event){
  event.preventDefault();

  alert("You have clicked Yes");

  var newTask = new Task(0);

  alert("newTask is " + newTask);

  $("h3#task-1").return(newTask.yes());

  alert("h3 should be displaying now");

  alert("This is alert #7")

});
