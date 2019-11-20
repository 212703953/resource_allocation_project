/* import { Component, OnInit } from '@angular/core';
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
 */
import { Component, OnInit, ComponentFactoryResolver } from "@angular/core";
//import { Operator, Factory } from "../../models";
import { Task } from "../../models";
import { TaskService } from "../../@core/services/task.service";
import { LocalDataSource } from 'ng2-smart-table';
import { ActionButtonComponent } from '../../@theme/components';
import { Router } from '@angular/router';

@Component({
  selector: "ngx-tasks",
  templateUrl: "tasks.component.html",
  styleUrls: ["tasks.component.scss"],
  providers: [TaskService]

})
export class TasksComponent implements OnInit {

  public tasks: Task[];
  source: LocalDataSource;

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'Id',
        editable: false,
        addable: false,
      },
      name: {
        title: 'Task Title',
      },
      idForRoute: {
        title: "Requirements",
        type: 'custom',
        renderComponent: ActionButtonComponent,
        onComponentInitFunction: (instance) => {
          instance.goToPage.subscribe(id => {
            this.router.navigate(['/pages', 'task',id,'requirements']);
          });
        },
        editable: false,
        addable: false
      },
    },
  };

  constructor(private taskService: TaskService, private router: Router) {
    this.source = new LocalDataSource();
    this.taskService.getTasks().subscribe((data) => {
      this.source.load(data);
      });      
  }

  ngOnInit() { }

  async onConfirmSave(event) {
    let task: Task = event.newData;
    task.id = Math.max(...(await this.source.getAll()).map(x => x.id)) + 1;
    // Send to API to save record and the resolve
    this.taskService.createTask(task).subscribe((res) => {
      event.confirm.resolve(task);
    });
  }

  onEditConfirm(event) {
    // Send to API to edit the record and then resolve
    //event.confirm.resolve(event.newData);
    const task : Task = event.newData;
     this.taskService.updateTask(task).subscribe((res) => {
      event.confirm.resolve(task);
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm("Are you sure you want to delete?")) {
      // Send to API to remove and then resolve
      //const subbusiness : SubBusiness=event.newData;
      const id : number = event.data.id;
      this.taskService.deleteTask(id).subscribe((res)=>{
        event.confirm.resolve(id);
      })
      
    } else {
      event.confirm.reject();
    }
  }

}
