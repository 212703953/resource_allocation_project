import { Component, OnInit } from '@angular/core';
import { Requirement } from '../../models';
import { RequirementService } from '../../@core/mock/requirement.service';
import { LocalDataSource } from 'ng2-smart-table';
import { ActionButtonComponent } from '../../@theme/components';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-requirements',
  templateUrl: './requirements.component.html',
  styleUrls : ['requirements.component.scss']
})

export class RequirementsComponent implements OnInit  {

  public requirements : Requirement[];
  source : LocalDataSource;

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
        title: 'Requirement',
      },
      type: {
        title: 'Type',
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

  constructor(private requirementService: RequirementService, private router: Router) {
    this.source = new LocalDataSource();
    this.requirementService
      .getRequirements()
      .subscribe(data => {
       this.source.load(data.map((o: any) => ({ ...o, idForRoute: o.id })));
      });   
    };
  ngOnInit(){
    this.requirementService
    .getRequirements()
    .subscribe(requirements => (this.requirements = requirements));
  }
  getSubbusiness(){}
  getFactory(){}
  getOperation(){}
  getProdline(){}
  deleteRequirement(id:number){}
  editRequirement(){}
}
