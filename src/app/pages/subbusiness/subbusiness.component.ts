import { Component, OnInit } from '@angular/core';
import { Subbusiness } from "../../models";
import { SubbusinessService } from '../../@core/mock/subbusiness.service';
import { LocalDataSource } from 'ng2-smart-table';
@Component({
  selector: 'ngx-subbusiness',
  templateUrl: './subbusiness.component.html',
  styleUrls: ['subbusiness.component.scss']
})
export class SubBusinessComponent implements OnInit {
  public Subbusinesss: Subbusiness[];
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
      
    },
  };

  ngOnInit() { }

  constructor(private subbusinessService: SubbusinessService) {
    this.source = new LocalDataSource();

    this.subbusinessService.getSubbusinesss().subscribe((data) => {
      this.source.load(data);
    });
  }

  async onConfirmSave(event) {
    let subbusiness: Subbusiness = event.newData;
    subbusiness.id = Math.max(...(await this.source.getAll()).map(x => x.id)) + 1;
    // Send to API to save record and the resolve
    event.confirm.resolve(subbusiness);
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
