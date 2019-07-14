import { Component, OnInit } from "@angular/core";
import { Operator } from "../../../models";
import { OperatorCapability } from "../../../models";
import { UserService } from "../../../@core/mock/users.service";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: "ngx-operators-capabilities",
  templateUrl: "operators-capabilities.component.html",
  styleUrls:['operators-capabilities.component.scss'],
})
export class OperatorsCapabilitiesComponent implements OnInit {



  public capabilities: OperatorCapability[];
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
        title: 'Capabilities',
      },
      business: {
        title: 'Type',
      },
    },
  };

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.sso) {
        let data = this.usersService.getOperatorCapabilities(+params.sso);
        this.source.load(data);
      }
    });
  }

  constructor(private usersService: UserService, private route: ActivatedRoute,) {
    this.source = new LocalDataSource();

  }
}
