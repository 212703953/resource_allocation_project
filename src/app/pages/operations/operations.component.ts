import { Component, OnInit, ComponentFactoryResolver } from "@angular/core";
import { Operation } from "../../models";
import { Factory } from "../../models";
import { OperationService } from '../../@core/services/operation.service';
import { TaskService } from "../../@core/mock/task.service";
import { LocalDataSource } from 'ng2-smart-table';
import { ActionButtonComponent } from '../../@theme/components';
import { Router } from '@angular/router';

@Component({
  selector: "ngx-operations",
  templateUrl: "operations.component.html",
  styleUrls: ["operations.component.scss"],
  providers: [OperationService]

})
export class OperationsComponent implements OnInit {

  public operations: Operation[];
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

  constructor(private operationService: OperationService, private router: Router) {
    this.source = new LocalDataSource();
    this.operationService.getOperations().subscribe((data) => {
      this.source.load(data);
      });    
    }

  ngOnInit() { }

  async onConfirmSave(event) {
    const operation: Operation = event.newData;
    operation.id = Math.max(...(await this.source.getAll()).map((x) => x.id)) + 1;
    // Send to API to save record and the resolve
    this.operationService.createOperation(operation).subscribe((res) => {
      event.confirm.resolve(operation);
    });
  }

  onEditConfirm(event) {
    // Send to API to edit the record and then resolve
   // event.confirm.resolve(event.newData);
  const operation : Operation = event.newData;
   this.operationService.updateOperation(operation).subscribe((res) => {
    event.confirm.resolve(operation);
  });
  }

  onDeleteConfirm(event): void {
    if (window.confirm("Are you sure you want to delete?")) {
      // Send to API to remove and then resolve
      //const subbusiness : SubBusiness=event.newData;
      const id : number = event.data.id;
      this.operationService.deleteOperation(id).subscribe((res)=>{
        event.confirm.resolve(id);
      })
      
    } else {
      event.confirm.reject();
    }
  }
}   
