var db = require("../db");


var Task = {
  getTasks: function(callback) {
    return db.query("Select task.task_id, task.name from task", callback)
  },
  createTask: function(task, callback) {
    return db.query(
      "Insert into task(task_id, name) values(?, ?)",
      [task.task_id, task.name],
      callback,
    );
  },
  updateTask: function(task,callback){
    return db.query(
      "Update task set name=?  where task_id=?",   [task.name],
      callback,
    );
  },

  deleteTask: function(id,callback){
    return db.query(
      "Delete from Task where task_id=?", [id],
      callback,
    );
  }
};

module.exports = Task;
