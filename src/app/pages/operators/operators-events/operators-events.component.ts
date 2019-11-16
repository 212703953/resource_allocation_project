import { Component, OnInit } from "@angular/core";
import { Operator } from "../../../models";
import { OperatorEvent } from "../../../models";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: "ngx-operators-events",
  templateUrl: "operators-events.component.html",
  styleUrls:['operators-events.component.scss'],
})
export class OperatorsEventsComponent implements OnInit {
  
  public events: OperatorEvent[];
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
        title: 'Unavailabilities',
      },
      type: {
        title: 'Type',
      },
      startDate: {
        title: 'Start Date',
      },
      finishDate: {
        title: 'Finish Date',
      },
    },
  };


  ngOnInit() {
  }
    constructor( private route: ActivatedRoute,) {
      this.source = new LocalDataSource();
  }
}
