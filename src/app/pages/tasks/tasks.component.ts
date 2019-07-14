import { Component, OnInit } from '@angular/core';
import { Task } from '../../models';
import { TaskService } from '../../@core/mock/task.service';

@Component({
  selector: 'ngx-tasks',
  templateUrl: './tasks.component.html',
  styleUrls : ['tasks.component.css']
})

export class TasksComponent implements OnInit  {
  constructor(private taskService: TaskService) {}

  public tasks : Task[];
  ngOnInit(){
    this.taskService
    .getTasks()
    .subscribe(tasks => (this.tasks = tasks));
  }
  getSubbusiness(){}
  getFactory(){}
  getOperation(){}
  getProdline(){}
  deleteTask(id:number){}
  editTask(){}
}
