import { Component, OnInit, ComponentFactoryResolver } from "@angular/core";
import { Operator, Factory } from "../../../models";
import { UserService } from "../../../@core/mock/users.service";
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
        title: 'Sso',
      },
      firstName: {
        title: 'First Name',
      },
      lastName: {
        title: 'Last Name',
      },
      scope: {
        title: 'Scope',
      },
      manager: {
        title: 'Manager',
      },
      shift: {
        title: 'Shift'
      },
      contractType: {
        title: "Contract Type"
      },
      ssoForRoute: {
        title: "Capabilities",
        type: 'custom',
        renderComponent: ActionButtonComponent,
        onComponentInitFunction: (instance) => {
          instance.goToCapabilities.subscribe(sso => {
            this.router.navigate(['/pages','factory']);
          });
        },
        editable: false,
        addable: false
      }
    },
  };

  constructor(private usersService: UserService, private router: Router) {
    this.source = new LocalDataSource();
    this.usersService
      .getOperators()
      .subscribe(data => {
        this.source.load(data.map((o: any) => ({ ...o, ssoForRoute: o.sso })));
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

  goToBla() {

  }

}
