import { Component, OnInit } from '@angular/core';
import { SubBusiness } from '../../models';
import { SubBusinessService } from '../../@core/services/sub-business.service';
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
    },
  };

  ngOnInit(){}

  constructor(private subBusinessService: SubBusinessService, private router: Router) {
    this.source = new LocalDataSource();
    this.subBusinessService.getSubBusinesses().subscribe((data) => {
      this.source.load(data);
      });    
    }

    async onConfirmSave(event) {
      const subbusiness: SubBusiness = event.newData;
      subbusiness.id = Math.max(...(await this.source.getAll()).map((x) => x.id)) + 1;
      // Send to API to save record and the resolve
      this.subBusinessService.createSubBusiness(subbusiness).subscribe((res) => {
        event.confirm.resolve(subbusiness);
      });
    }
  
    onEditConfirm(event) {
      // Send to API to edit the record and then resolve
     // event.confirm.resolve(event.newData);
    const subbusiness : SubBusiness = event.newData;
     this.subBusinessService.updateSubBusiness(subbusiness).subscribe((res) => {
      event.confirm.resolve(subbusiness);
    });
    }
  
    onDeleteConfirm(event): void {
      if (window.confirm("Are you sure you want to delete?")) {
        // Send to API to remove and then resolve
        //const subbusiness : SubBusiness=event.newData;
        const id : number = event.data.id;
        this.subBusinessService.deleteSubBusiness(id).subscribe((res)=>{
          event.confirm.resolve(id);
        })
        
      } else {
        event.confirm.reject();
      }
    }
}   

