import { Component, OnInit } from '@angular/core';
import { ProductionLine } from '../../models';
import { ProductionLineService } from '../../@core/mock/production-line.service';
import { LocalDataSource } from 'ng2-smart-table';
import { ActionButtonComponent } from '../../@theme/components';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-production-line',
  templateUrl: './production-line.component.html',
  styleUrls : ['production-line.component.scss']
})

export class ProductionLineComponent implements OnInit  {

  public productionLines : ProductionLine[];
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
        title: 'Production Line',
      },
      factory: {
        title: 'Factory',
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

  constructor(private productionLineService: ProductionLineService, private router: Router) {
    this.source = new LocalDataSource();
    this.productionLineService
      .getProductionLines()
      .subscribe(data => {
       this.source.load(data.map((o: any) => ({ ...o, idForRoute: o.id })));
      });   
    };
  ngOnInit(){
    this.productionLineService
    .getProductionLines()
    .subscribe(productionLines => (this.productionLines = productionLines));
  }
  getSubbusiness(){}
  getFactory(){}
  getOperation(){}
  //getProdline(){}
  deleteRequirement(id:number){}
  editRequirement(){}
}
