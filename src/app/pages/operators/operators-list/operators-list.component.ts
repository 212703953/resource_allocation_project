import { Component, OnInit, } from "@angular/core";
import { Operator,} from "../../../models";
import {OperatorService} from "../../../@core/services/operator.service"
import { LocalDataSource } from 'ng2-smart-table';
import { ActionButtonComponent } from '../../../@theme/components';
import { Router } from '@angular/router';

@Component({
  selector: "ngx-operators-list",
  templateUrl: "operators-list.component.html",
  styleUrls: ["operators-list.component.scss"]
})
export class OperatorsListComponent implements OnInit {

  public operators: Operator[];
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
      sso: {
        title: 'SSO',
      },
      first_name: {
        title: 'First Name',
      },
      last_name: {
        title: 'Last Name',
      },

      ssoForRoute: {
        title: "Capabilities",
        type: 'custom',
        renderComponent: ActionButtonComponent,
        onComponentInitFunction: (instance) => {
          instance.goToPage.subscribe(sso => {
            this.router.navigate(['/pages', 'operators-capabilities', sso]);
          });
        },
        editable: false,
        addable: false
      },
      ssoForRoute2: {
        title: "Events",
        type: 'custom',
        renderComponent: ActionButtonComponent,
        onComponentInitFunction: (instance) => {
          instance.goToPage.subscribe(sso => {
            this.router.navigate(['/pages', 'operators-events', sso]);
          });
        },
        editable: false,
        addable: false
      }
    },
  };

  ngOnInit() {}

  constructor(private operatorService: OperatorService, private router: Router) {
    this.source = new LocalDataSource();

    this.operatorService.getOperators().subscribe((data) => {
      this.source.load(data);
    });
  }

  async onConfirmSave(event) {
    const operator: Operator = event.newData;
    operator.id = Math.max(...(await this.source.getAll()).map((x) => x.id)) + 1;
    // Send to API to save record and the resolve
    this.operatorService.createOperator(operator).subscribe((res) => {
      event.confirm.resolve(operator);
    });
  }

  onEditConfirm(event) {
    // Send to API to edit the record and then resolve
   // event.confirm.resolve(event.newData);
  const operator : Operator = event.newData;
   this.operatorService.updateOperator(operator).subscribe((res) => {
    event.confirm.resolve(operator);
  });
  }

  onDeleteConfirm(event): void {
    if (window.confirm("Are you sure you want to delete?")) {
      // Send to API to remove and then resolve
      //const operator : Operator=event.newData;
      const id : number = event.data.id;
      this.operatorService.deleteOperator(id).subscribe((res)=>{
        event.confirm.resolve(id);
      })
      
    } else {
      event.confirm.reject();
    }
  }

}
