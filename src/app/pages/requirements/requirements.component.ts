import { Component, OnInit } from '@angular/core';
import { Requirement } from '../../models';
import { RequirementService } from '../../@core/services/requirement.service';
import { LocalDataSource } from 'ng2-smart-table';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-requirements',
  templateUrl: './requirements.component.html',
  styleUrls : ['requirements.component.scss'],
  providers: [RequirementService]

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
      requirement_type: {
        title: 'Type',
      },
      name: {
        title: 'Requirement',
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
    this.requirementService.getRequirements().subscribe((data) => {
      this.source.load(data);
    });   
    };
  ngOnInit(){}
  //getSubbusiness(){}
  //getFactory(){}
  //getOperation(){}
  //getProdline(){}
  //deleteRequirement(id:number){}
  //editRequirement(){}
  async onConfirmSave(event) {
    const requirement: Requirement = event.newData;
    requirement.id = Math.max(...(await this.source.getAll()).map((x) => x.id)) + 1;
    // Send to API to save record and the resolve
    this.requirementService.createRequirement(requirement).subscribe((res) => {
      event.confirm.resolve(requirement);
    });
  }
  onEditConfirm(event) {
    // Send to API to edit the record and then resolve
   // event.confirm.resolve(event.newData);
  const requirement : Requirement = event.newData;
   this.requirementService.updateRequirement(requirement).subscribe((res) => {
    event.confirm.resolve(requirement);
  });
  }

  onDeleteConfirm(event): void {
    if (window.confirm("Are you sure you want to delete?")) {
      // Send to API to remove and then resolve
      //const factory : Factory=event.newData;
      const id : number = event.data.id;
      this.requirementService.deleteRequirement(id).subscribe((res)=>{
        event.confirm.resolve(id);
      })
      
    } else {
      event.confirm.reject();
    }
  }
}
