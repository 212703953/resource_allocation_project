import { Component, OnInit } from '@angular/core';
import { SubBusiness } from '../../models';
import { SubBusinessService } from '../../@core/mock/sub-business.service';
import { LocalDataSource } from 'ng2-smart-table';
import { ActionButtonComponent } from '../../@theme/components';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-sub-business',
  templateUrl: './sub-business.component.html',
  styleUrls : ['sub-business.component.scss'],
  providers: [SubBusinessService]
})

export class SubBusinessComponent implements OnInit  {

  public subBusinesses : SubBusiness[];
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
        title: 'Sub Business',
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

  constructor(private subBusinessService: SubBusinessService, private router: Router) {
    this.source = new LocalDataSource();
    this.subBusinessService
      .getSubBusinesses()
      .subscribe(data => {
       this.source.load(data.map((o: any) => ({ ...o, idForRoute: o.id })));
      });   
    };
  ngOnInit(){
    this.subBusinessService
    .getSubBusinesses()
    .subscribe(subBusinesses => (this.subBusinesses = subBusinesses));
  }
  getSubbusiness(){}
  getFactory(){}
  getOperation(){}
  //getProdline(){}
  deleteRequirement(id:number){}
  editRequirement(){}
}
