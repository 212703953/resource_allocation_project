import { Component, OnInit, ComponentFactoryResolver } from "@angular/core";
import { Operation } from "../../models";
import { Factory } from "../../models";
import { TaskService } from "../../@core/mock/task.service";
import { LocalDataSource } from 'ng2-smart-table';
import { ActionButtonComponent } from '../../@theme/components';
import { Router } from '@angular/router';

@Component({
  selector: "ngx-operations",
  templateUrl: "operations.component.html",
  styleUrls: ["operations.component.scss"]
})
export class OperationsComponent implements OnInit {

  public tasks: Operation[];
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
      Name: {
        title: 'Operation Title',
      },
      // idForRoute: {
      //   title: "Requirements",
      //   type: 'custom',
      //   renderComponent: ActionButtonComponent,
      //   onComponentInitFunction: (instance) => {
      //     instance.goToPage.subscribe(id => {
      //       this.router.navigate(['/pages', 'task',id,'requirements']);
      //     });
      //   },
      //   editable: false,
      //   addable: false
      // },
    },
  };

  constructor(private taskService: TaskService, private router: Router) {
    this.source = new LocalDataSource();
    this.taskService
      .getTasks()
      .subscribe(data => {
        this.source.load(data.map((o: any) => ({ ...o, idForRoute: o.id })));
        //this.source.load(data.map((o:any)=>({...o,ssoForRoute2:o.sso})));
      });      
  }

  ngOnInit() { }

  async onConfirmSave(event) {
    let factory: Factory = event.newData;
    factory.id = Math.max(...(await this.source.getAll()).map(x => x.id)) + 1;
    // Send to API to save record and the resolve
    event.confirm.resolve(factory);
  }

  onEditConfirm(event) {
    // Send to API to edit the record and then resolve
    event.confirm.resolve(event.newData);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      // Send to API to remove and then resolve
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

}
