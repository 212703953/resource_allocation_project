import { Component, OnInit } from "@angular/core";
import { Operator } from "../../../models";
import { OperatorCapability } from "../../../models";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: "ngx-operators-capabilities",
  templateUrl: "operators-capabilities.component.html",
  styleUrls: ['operators-capabilities.component.scss'],
})
export class OperatorsCapabilitiesComponent implements OnInit {



  public capabilities: OperatorCapability[];
  public operator: Operator;
  public isRetrieving = true;
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
        title: 'Name',
      },
      type: {
        title: 'Type',
      },
      expirationDate: {
        title: 'Expiration date'
      }
    },
  };

  ngOnInit() {

  }

  constructor(private route: ActivatedRoute, ) {
    this.source = new LocalDataSource();

  }

  async onConfirmSave(event) {
    let capability: OperatorCapability = event.newData;
    var data = (await this.source.getAll());
    capability.id = data.length == 0 ? 1 : Math.max(...data.map(x => x.id)) + 1;
    // Send to API to save record and the resolve
    event.confirm.resolve(capability);
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
